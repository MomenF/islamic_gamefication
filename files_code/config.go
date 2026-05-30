package config

import (
	"fmt"
	"os"
	"strconv"

	"github.com/joho/godotenv"
)

type Config struct {
	App      AppConfig
	Database DatabaseConfig
	Redis    RedisConfig
	JWT      JWTConfig
}

type AppConfig struct {
	Env  string
	Port string
}

type DatabaseConfig struct {
	Host     string
	Port     string
	User     string
	Password string
	Name     string
	SSLMode  string
}

type RedisConfig struct {
	URL      string
	Password string
}

type JWTConfig struct {
	Secret      string
	ExpireHours int
}

func Load() (*Config, error) {
	// في production مش محتاجين .env — المتغيرات بتيجي من السيرفر
	_ = godotenv.Load()

	jwtExpire, err := strconv.Atoi(getEnv("JWT_EXPIRE_HOURS", "72"))
	if err != nil {
		return nil, fmt.Errorf("invalid JWT_EXPIRE_HOURS: %w", err)
	}

	return &Config{
		App: AppConfig{
			Env:  getEnv("APP_ENV", "development"),
			Port: getEnv("APP_PORT", "8080"),
		},
		Database: DatabaseConfig{
			Host:     mustGetEnv("DB_HOST"),
			Port:     getEnv("DB_PORT", "5432"),
			User:     mustGetEnv("DB_USER"),
			Password: mustGetEnv("DB_PASSWORD"),
			Name:     mustGetEnv("DB_NAME"),
			SSLMode:  getEnv("DB_SSLMODE", "disable"),
		},
		Redis: RedisConfig{
			URL:      mustGetEnv("REDIS_URL"),
			Password: getEnv("REDIS_PASSWORD", ""),
		},
		JWT: JWTConfig{
			Secret:      mustGetEnv("JWT_SECRET"),
			ExpireHours: jwtExpire,
		},
	}, nil
}

// DSN returns the PostgreSQL connection string for GORM.
func (d *DatabaseConfig) DSN() string {
	return fmt.Sprintf(
		"host=%s port=%s user=%s password=%s dbname=%s sslmode=%s TimeZone=UTC",
		d.Host, d.Port, d.User, d.Password, d.Name, d.SSLMode,
	)
}

func getEnv(key, fallback string) string {
	if v := os.Getenv(key); v != "" {
		return v
	}
	return fallback
}

func mustGetEnv(key string) string {
	v := os.Getenv(key)
	if v == "" {
		panic(fmt.Sprintf("required environment variable %q is not set", key))
	}
	return v
}
