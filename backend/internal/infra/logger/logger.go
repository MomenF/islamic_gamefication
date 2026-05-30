package logger

import (
	"go.uber.org/zap"
)

// New returns a zap logger.
// Development mode → colored console output.
// Production mode  → structured JSON output.
func New(env string) (*zap.Logger, error) {
	if env == "production" {
		return zap.NewProduction()
	}
	return zap.NewDevelopment()
}
