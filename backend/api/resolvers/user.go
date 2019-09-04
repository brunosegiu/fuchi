package resolvers

import (
	database "api/database"
	models "api/models"
	"context"
	"fmt"
)

var users = []*models.User{
	{
		IDField:       "0x01",
		NicknameField: "Albus Dumbledore",
	},
	{
		IDField:       "0x02",
		NicknameField: "Harry Potter",
	},
	{
		IDField:       "0x03",
		NicknameField: "Hermione Granger",
	},
}

var usersMap = make(map[string]*models.User)

func (r *Resolver) User(ctx context.Context, args struct{ Id string }) (models.User, error) {
	db := database.Connect()
	user, err := db.LoadUser(args.Id)
	if err != nil {
		err := fmt.Errorf("user with id=%s does not exist", args.Id)
		return models.User{}, err
	} else {
		return *user, nil
	}

}
