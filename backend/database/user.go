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

func FindWithNickname(nickname string) ([]models.User, error) {
	var users []models.User
	const limit int = 50
	if nickname == "" {
		DB.Limit(limit).Find(&users)
	} else {
		DB.Where("levenshtein(nickname, ?) < 7", nickname).Limit(limit).Find(&users)
	}
	return users, nil
}

func CreateUser(user models.User) error {
	DB.FirstOrCreate(&user, user)
	return nil
}
