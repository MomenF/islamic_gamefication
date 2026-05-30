package main

import (
	"os"
	"os/signal"
	"syscall"

	"github.com/gofiber/fiber/v2"
	"go.uber.org/zap"

	"github.com/yourusername/quran-game-backend/config"
	"github.com/yourusername/quran-game-backend/internal/infra/logger"
	"github.com/yourusername/quran-game-backend/internal/infra/postgres"
	"github.com/yourusername/quran-game-backend/internal/infra/redis"
)

func main() {
	// ── 1. Config ──────────────────────────────────────────────────
	cfg, err := config.Load()
	if err != nil {
		panic("failed to load config: " + err.Error())
	}

	// ── 2. Logger ──────────────────────────────────────────────────
	log, err := logger.New(cfg.App.Env)
	if err != nil {
		panic("failed to init logger: " + err.Error())
	}
	defer log.Sync() //nolint:errcheck

	// ── 3. PostgreSQL ──────────────────────────────────────────────
	db, err := postgres.Connect(cfg.Database.DSN(), cfg.App.Env == "production")
	if err != nil {
		log.Fatal("postgres connection failed", zap.Error(err))
	}
	log.Info("postgres connected")

	// ── 4. Redis ───────────────────────────────────────────────────
	rdb, err := redis.Connect(cfg.Redis.URL, cfg.Redis.Password)
	if err != nil {
		log.Fatal("redis connection failed", zap.Error(err))
	}
	log.Info("redis connected")

	// ── 5. Fiber ───────────────────────────────────────────────────
	app := fiber.New(fiber.Config{
		AppName:      "Quran Game API",
		ErrorHandler: defaultErrorHandler(log),
	})

	// health check — بنتأكد إن السيرفر شغال
	app.Get("/health", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"status":   "ok",
			"postgres": db != nil,
			"redis":    rdb != nil,
		})
	})

	// ── 6. Graceful shutdown ───────────────────────────────────────
	quit := make(chan os.Signal, 1)
	signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)

	go func() {
		addr := ":" + cfg.App.Port
		log.Info("server starting", zap.String("addr", addr))
		if err := app.Listen(addr); err != nil {
			log.Fatal("server error", zap.Error(err))
		}
	}()

	<-quit
	log.Info("shutting down...")
	_ = app.Shutdown()
}

// defaultErrorHandler logs unexpected errors and returns a clean JSON response.
func defaultErrorHandler(log *zap.Logger) fiber.ErrorHandler {
	return func(c *fiber.Ctx, err error) error {
		code := fiber.StatusInternalServerError
		if e, ok := err.(*fiber.Error); ok {
			code = e.Code
		}
		log.Error("unhandled error",
			zap.Int("status", code),
			zap.String("path", c.Path()),
			zap.Error(err),
		)
		return c.Status(code).JSON(fiber.Map{
			"ok":    false,
			"error": err.Error(),
		})
	}
}
