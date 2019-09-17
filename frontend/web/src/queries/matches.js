import gql from 'graphql-tag'

export const GET_TEAMS = gql`
  query splitPlayers($players: [PlayerInput!]!) {
    getTeams(players: $players) {
      players {
        user {
          id
          nickname
          email
          externalId
          imageURL
        }
        skill
      }
      skill
    }
  }
`
