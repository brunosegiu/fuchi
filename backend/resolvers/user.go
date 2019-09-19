package resolvers

import (
	"context"
	"fmt"

	database "api/database"
	models "api/models"

	googleVerifier "github.com/futurenda/google-auth-id-token-verifier"
)

func (r *Resolver) Me(ctx context.Context) (*models.User, error) {
	user := ctx.Value("user").(*models.User)
	return user, nil
}

func (r *Resolver) CreateUser(ctx context.Context, args struct {
	Nickname string
}) (*models.User, error) {
	user := models.NewNAuth(args.Nickname)
	err := database.CreateUser(&user)
	return &user, err
}

const CLIENT_ID string = "503139838940-69vbq5581jf5mqak4ivmfg5v4rui9d7s.apps.googleusercontent.com"

func toAuthUser(idToken string) (*models.User, error) {
	verifier := googleVerifier.Verifier{}
	err := verifier.VerifyIDToken(idToken, []string{CLIENT_ID})
	if err != nil {
		return nil, err
	}
	claimSet, err := googleVerifier.Decode(idToken)
	if err != nil {
		return nil, err
	}
	user := models.NewUser(claimSet.Name, &claimSet.Email, &claimSet.Sub, &claimSet.Picture)
	return &user, nil
}

func (r *Resolver) CreateAuthUser(ctx context.Context, args struct{ IdToken string }) (*string, error) {
	user, err := toAuthUser(args.IdToken)
	if err != nil {
		return nil, err
	}
	err = database.CreateUser(user)
	if err != nil {
		return nil, err
	}
	fmt.Print(*user.Token)
	return user.Token, err
}
