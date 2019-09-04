package models

import "github.com/graph-gophers/graphql-go"

type User struct {
	IDField       string
	NicknameField string
}

func (u User) ID() graphql.ID {
	return graphql.ID(u.IDField)
}

func (u User) Nickname() string {
	return u.NicknameField
}
