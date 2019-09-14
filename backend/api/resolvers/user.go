package resolvers

import (
	commons "api/commons"
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

type CreateUserArgs struct {
	Nickname   string
	IDToken    *string
	Email      *string
	ExternalID *string
	ImageURL   *string
}

func (r *Resolver) CreateUser(ctx context.Context, args CreateUserArgs) (models.User, error) {
	validParms := args.ExternalID == nil || commons.IsValidToken(args.IDToken)
	if validParms {
		user, err := r.DB.CreateUser(args.Nickname, args.Email, args.ExternalID, args.ImageURL)
		if err != nil {
			panic(err)
		}
		return *user, nil
	} else {
		panic("Token wasn't valid")
	}
}
