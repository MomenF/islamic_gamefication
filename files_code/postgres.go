package postgres

import (
	"fmt"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

// Connect opens a GORM connection to PostgreSQL and verifies it with a ping.
func Connect(dsn string, isProd bool) (*gorm.DB, error) {
	logLevel := logger.Info
	if isProd {
		logLevel = logger.Warn // في production نقلل الـ SQL logs
	}

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{
		Logger: logger.Default.LogMode(logLevel),
	})
	if err != nil {
		return nil, fmt.Errorf("failed to connect to postgres: %w", err)
	}

	// ping
	sqlDB, err := db.DB()
	if err != nil {
		return nil, fmt.Errorf("failed to get underlying sql.DB: %w", err)
	}
	if err := sqlDB.Ping(); err != nil {
		return nil, fmt.Errorf("postgres ping failed: %w", err)
	}

	return db, nil
}
