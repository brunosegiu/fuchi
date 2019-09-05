import React from 'react'

import TeamTable from '../Tables/Team'
import Scoreboard from './Scoreboard'

const scores = {
  firstTeamScore: 3,
  secondTeamScore: 4,
}

export default () => {
  return (
    <React.Fragment>
      <Scoreboard {...scores}></Scoreboard>
      <TeamTable></TeamTable>
    </React.Fragment>
  )
}
