import React from 'react'
import { makeStyles, emphasize } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { useQuery, useLazyQuery } from '@apollo/react-hooks'

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

export default () => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)
  const [selectedUsers, setSelectedUsers] = React.useState({})

  const handleNext = () => {
    if (activeStep === 0) {
      //   const [getTeams] = useLazyQuery(GET_TEAMS, {
      //     variables: {
      //       players: Object.values(selectedUsers).map(en => ({
      //         userId: en.id,
      //         skill: Math.round(Math.random() * 100),
      //       })),
      //     },
      //   })
    }

    setActiveStep(Math.min(activeStep + 1, steps.length - 1))
  }

  const handleBack = () => {
    setActiveStep(Math.max(activeStep - 1, 0))
  }

  const handleReset = () => {
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
        {activeStep === 0 && (
          <PlayersList
            checked={selectedUsers}
            setChecked={setSelectedUsers}
          ></PlayersList>
        )}
        {activeStep === 1 && <Team team1={[]} team2={[]}></Team>}
        {activeStep === 2 && <Team team1={[]} team2={[]}></Team>}
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
