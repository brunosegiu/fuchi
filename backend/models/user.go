package models

import (
	commons "api/commons"

	guuid "github.com/google/uuid"
	graphql "github.com/graph-gophers/graphql-go"
)

type User struct {
	ID         graphql.ID `gorm:"type:varchar(500);primary_key"`
	Nickname   string     `gorm:"type:varchar(500);unique; not null"`
	Email      *string
	ExternalID *string `gorm:"type:varchar(500);unique;"`
	ImageURL   *string
	Token      *string `gorm:"type:varchar(500);unique;"`
}

func NewUser(Nickname string, Email *string, ExternalID *string, ImageURL *string) User {
	var id string = guuid.New().String()
	var token string
	if ExternalID != nil {
		var err error
		token, err = commons.GetToken(*ExternalID)
		if err != nil {
			panic(err)
		}
	}
	return User{ID: graphql.ID(id), Nickname: Nickname, Email: Email, ExternalID: ExternalID, ImageURL: ImageURL, Token: &token}
}

func NewNAuth(Nickname string) User {
	return NewUser(Nickname, nil, nil, nil)
}
