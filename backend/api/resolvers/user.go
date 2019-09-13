package resolvers

import (
	models "api/models"
	"context"
)

func (r *Resolver) GetUser(ctx context.Context, args struct{ ID string }) (*models.User, error) {
	user, err := r.DB.LoadUser(args.ID)
	if err != nil {
		return nil, nil
	} else {
		return user, nil
	}
}

func (r *Resolver) CreateUser(ctx context.Context, args struct {
	ID       string
	Nickname string
}) (models.User, error) {
	user, err := r.DB.CreateUser(args.ID, args.Nickname)
	if err != nil {
		panic(err)
	}
	return *user, nil
}
