package models

import graphql "github.com/graph-gophers/graphql-go"

type User struct {
	ID_         string
	Nickname_   string
	Email_      *string
	ExternalID_ *string
	ImageURL_   *string
}

func (u User) ID() graphql.ID {
	return graphql.ID(u.ID_)
}

func (u User) Nickname() string {
	return u.Nickname_
}

func (u User) Email() *string {
	return u.Email_
}

func (u User) ExternalID() *string {
	return u.ExternalID_
}

func (u User) ImageURL() *string {
	return u.ImageURL_
}
