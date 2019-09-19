import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { useQuery } from '@apollo/react-hooks'

import Team from '../Tables/Team'
import PlayersList from '../Tables/PlayersList'

import { GET_TEAMS } from '../../queries/matches'
import styled from '@emotion/styled'
import { flexbox } from '@material-ui/system'

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}))

const StepContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '50vh',
  transition: 'height 0.5s',
})

const ControlContainer = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
})

const steps = ['Add players', 'Customize player skill', 'Confirm your setup!']

const renderStep = step => {
  switch (step) {
    case 0:
      return 'Select campaign settings...'
    case 1:
      return 'What is an ad group anyways?'
    case 2:
      return 'This is the bit I really care about!'
    default:
      return 'Unknown step'
  }
}

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
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)
  const { loading, error, data } = useQuery(GET_TEAMS, {
    variables: { players },
  })
  const [team1, team2] = data ? data.getTeams : [undefined, undefined]

  function handleNext() {
    setActiveStep(Math.min(activeStep + 1, steps.length - 1))
  }

  function handleBack() {
    setActiveStep(Math.max(activeStep - 1, 0))
  }

  function handleReset() {
    setActiveStep(0)
  }

  return (
    <div className={classes.root}>
      <Typography variant="h2">New match</Typography>
      <div style={{ minWidth: '50%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      <StepContainer>
        {activeStep === 0 && <PlayersList></PlayersList>}
        {activeStep === 1 && <Team team1={team1} team2={team2}></Team>}
        {activeStep === 2 && <Team team1={team1} team2={team2}></Team>}
      </StepContainer>
      <ControlContainer>
        <Button onClick={handleBack}>Back</Button>
        <Button onClick={handleNext}>
          {steps.length - 1 === activeStep ? 'Confirm' : 'Next'}
        </Button>
      </ControlContainer>
    </div>
  )
}
