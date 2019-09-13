import React from 'react'

import { Route } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

import SpeedDial from './SpeedDial'
import Drawer from './Drawer'
import Dashboard from './Pages/Dashbord'
import { Container } from '@material-ui/core'
import { DRAWER_WIDTH } from '../utils/constants'

const Placeholder = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: `url("logo.png") no-repeat fixed center`,
    }}
  ></div>
)

const useStyles = open =>
  makeStyles(theme => ({
    margins: {
      ...theme.mixins.toolbar,
      margin: `15vh 0 0 ${open ? DRAWER_WIDTH : '0'}`,
      minWidth: open ? `calc(100vw - ${DRAWER_WIDTH})` : '100vw',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
  }))

export default ({ open, setOpen }) => {
  const classes = useStyles(open)()
  return (
    <React.Fragment>
      <Drawer open={open} setOpen={setOpen}></Drawer>
      <Container className={classes.margins}>
        <Route exact path="/" component={Placeholder} />
        <Route exact path="/dashboard" component={Dashboard} />
        <SpeedDial></SpeedDial>
      </Container>
    </React.Fragment>
  )
}
