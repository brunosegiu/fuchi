package database

import (
	"api/models"

	graphql "github.com/graph-gophers/graphql-go"
)

func LoadUser(id graphql.ID) (*models.User, error) {
	user := &models.User{}
	DB.First(&user, "id = ?", id)
	return user, nil
}

func LoadUserWithToken(token string) (*models.User, error) {
	user := &models.User{}
	DB.First(&user, "token = ?", token)
	return user, nil
}

func CreateUser(user *models.User) error {
	DB.Set("gorm:insert_option", "ON CONFLICT DO NOTHING").Create(&user)
	return nil
}
