package models

import graphql "github.com/graph-gophers/graphql-go"

type User struct {
	ID_       string
	Nickname_ string
}

func (u User) ID() graphql.ID {
	return graphql.ID(u.ID_)
}

func (u User) Nickname() string {
	return u.Nickname_
}
