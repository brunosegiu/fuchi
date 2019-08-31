import React from 'react';

import Container from '@material-ui/core/Container'

import Toolbar from './components/Toolbar'
import SignIn from './components/SignIn'
import SpeedDial from './components/SpeedDial'

export default () => {
  return (
    <Container>
    <Toolbar/>
    <SpeedDial></SpeedDial>
    <SignIn></SignIn>
    </Container>
  );
}
