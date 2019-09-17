import React from 'react'

import styled from '@emotion/styled'
import { useQuery } from '@apollo/react-hooks'

import { GET_TEAMS } from '../../queries/matches'
import Team from '../Tables/Team'
import { Typography } from '@material-ui/core'

const TopContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  alignItems: 'center',
})

const players = [
  { userId: '1c70011b-2c0f-4461-a192-c7e6310f24f3', skill: 5 },
  { userId: '1c70011b-2c0f-4461-a192-c7e6310f24f3', skill: 7 },
  { userId: '1c70011b-2c0f-4461-a192-c7e6310f24f3', skill: 3 },
  { userId: '1c70011b-2c0f-4461-a192-c7e6310f24f3', skill: 7 },
  { userId: '1c70011b-2c0f-4461-a192-c7e6310f24f3', skill: 9 },
  { userId: '1c70011b-2c0f-4461-a192-c7e6310f24f3', skill: 4 },
  { userId: '1c70011b-2c0f-4461-a192-c7e6310f24f3', skill: 8 },
  { userId: '1c70011b-2c0f-4461-a192-c7e6310f24f3', skill: 1 },
]

export default () => {
  const { loading, error, data } = useQuery(GET_TEAMS, {
    variables: { players },
  })

  const [team1, team2] = data ? data.getTeams : [undefined, undefined]

  return (
    <TopContainer>
      <Typography variant="h2">New match</Typography>
      <Team team1={team1} team2={team2}></Team>
    </TopContainer>
  )
}
