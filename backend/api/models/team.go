package models

import graphql "github.com/graph-gophers/graphql-go"

type Player struct {
	User  User
	Skill int32
}

type PlayerInput struct {
	UserID graphql.ID
	Skill  int32
}

type Team struct {
	Players []Player
	Skill   int32
}

func (team *Team) AddPlayer(player Player) {
	team.Skill += player.Skill
	team.Players = append(team.Players, player)
}
