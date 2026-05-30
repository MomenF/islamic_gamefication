package redis

import (
	"context"
	"fmt"

	"github.com/go-redis/redis/v9"
)

// Connect creates a go-redis client from a URL and verifies it with a ping.
func Connect(url, password string) (*redis.Client, error) {
	opts, err := redis.ParseURL(url)
	if err != nil {
		return nil, fmt.Errorf("invalid redis URL: %w", err)
	}

	if password != "" {
		opts.Password = password
	}

	client := redis.NewClient(opts)

	if err := client.Ping(context.Background()).Err(); err != nil {
		return nil, fmt.Errorf("redis ping failed: %w", err)
	}

	return client, nil
}
