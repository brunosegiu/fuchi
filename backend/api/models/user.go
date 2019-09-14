package models

import (
	graphql "github.com/graph-gophers/graphql-go"
)

type User struct {
	ID         graphql.ID `gorm:"type:varchar(500);primary_key"`
	Nickname   string     `gorm:"type:varchar(500);unique; not null"`
	Email      *string
	ExternalID *string     `gorm:"type:varchar(500);unique;"`
	ImageURL   *string
}
