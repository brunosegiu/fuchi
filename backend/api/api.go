package api

import (
	"context"
	"fmt"
	"log"

	"api/models"
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

type Resolver struct{}

func (r *Resolver) User(ctx context.Context, args struct{ Id string }) (models.User, error) {
	for _, _usr := range users {
		usersMap[_usr.IDField] = _usr
	}
	if usr, ok := usersMap[args.Id]; ok {
		return *usr, nil
	}
	log.Printf("Getting user %s", args.Id)
	for _, _usr := range users {
		log.Printf("Available id user %s", _usr.IDField)
	}
	err := fmt.Errorf("user with id=%s does not exist", args.Id)
	return models.User{}, err
}
