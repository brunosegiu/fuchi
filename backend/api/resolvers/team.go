package resolvers

import (
	models "api/models"
	"context"
	"sort"
)

func patition(players []models.Player, teamCount int) []models.Team {
	teams := make([]models.Team, teamCount)
	sort.Slice(players, func(i, j int) bool {
		return players[i].Skill > players[j].Skill
	})
	for _, player := range players {
		sort.Slice(teams, func(i, j int) bool {
			return teams[i].Skill < teams[j].Skill
		})
		teams[0].AddPlayer(player)
	}
	return teams
}

type GetTeamArgs struct {
	Players []models.PlayerInput
}

func (r *Resolver) GetTeams(ctx context.Context, args GetTeamArgs) ([]models.Team, error) {
	inputs := args.Players
	players := make([]models.Player, len(inputs))
	for i, input := range inputs {
		players[i] = models.Player{UserID: input.UserID, Skill: input.Skill}
	}
	return patition(players, 2), nil
}
