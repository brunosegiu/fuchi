package resolvers

import (
	database "api/database"
	models "api/models"
	"context"
)

func (r *Resolver) Me(ctx context.Context) (*models.User, error) {
	user := ctx.Value("user").(*models.User)
	return user, nil
}

type CreateUserArgs struct {
	Nickname string
}

func (r *Resolver) CreateUser(ctx context.Context, args CreateUserArgs) (models.User, error) {
	user, err := database.CreateUser(args.Nickname, nil, nil, nil)
	return *user, err
}
