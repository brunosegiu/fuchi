package database

import (
	"api/models"

	guuid "github.com/google/uuid"
	graphql "github.com/graph-gophers/graphql-go"
)

func LoadUser(id graphql.ID) (*models.User, error) {
	user := &models.User{}
	DB.First(&user, "id = ?", id)
	println(id)
	return user, nil
}

func CreateUser(nickname string, email *string, externalId *string, imageURL *string) (*models.User, error) {
	var id string = guuid.New().String()
	user := models.User{ID: graphql.ID(id), Nickname: nickname, Email: email, ExternalID: externalId, ImageURL: imageURL}
	DB.Set("gorm:insert_option", "ON CONFLICT DO NOTHING").Create(&user)
	return &user, nil
}
