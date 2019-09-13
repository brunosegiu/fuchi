import React from 'react'

import Paper from '@material-ui/core/Paper'

import { makeStyles } from '@material-ui/core'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import { Typography } from '@material-ui/core'
import styled from '@emotion/styled'

const TeamsSection = styled.div({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
})

const TeamSection = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
  justifyContent: 'center',
  alignItems: 'center',
})

const useStyles = makeStyles(theme => ({
  root: {
    width: '50vw',
    minWidth: '250px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '4vh',
    padding: '1vw',
  },
}))

export default ({ firstTeamScore, secondTeamScore }) => {
  const classes = useStyles()
  return (
    <Paper className={classes.root}>
      <Typography variant="h5">Last match</Typography>
      <TeamsSection>
        <TeamSection>
          <Typography variant="h6">1st team</Typography>
          <SupervisorAccountIcon
            color="primary"
            style={{ fontSize: 50 }}
          ></SupervisorAccountIcon>
          <Typography variant="h6">{firstTeamScore}</Typography>
        </TeamSection>
        <span style={{ fontWeight: 'bold', fontSize: 20 }}>-</span>
        <TeamSection>
          <Typography variant="h6">2nd team</Typography>
          <SupervisorAccountIcon
            color="secondary"
            style={{ fontSize: 50 }}
          ></SupervisorAccountIcon>
          <Typography variant="h6">{secondTeamScore}</Typography>
        </TeamSection>
      </TeamsSection>
    </Paper>
  )
}
