package resolvers

import (
	models "api/models"
	"context"
	"fmt"
)

func (r *Resolver) User(ctx context.Context, args struct{ id string }) (models.User, error) {
	user, err := r.DB.LoadUser(args.id)
	if err != nil {
		err := fmt.Errorf("user with id=%s does not exist", args.id)
		return models.User{}, err
	} else {
		return *user, nil
	}
}

func (r *Resolver) CreateUser(ctx context.Context, args struct {
	id       string
	nickname string
}) (models.User, error) {
	user, err := r.DB.CreateUser(args.id, args.nickname)
	if err != nil {
		panic(err)
	}
	return *user, nil
}
