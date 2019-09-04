import React from 'react'

import Container from '@material-ui/core/Container'
import { styled } from '@material-ui/styles';
import Toolbar from './components/Toolbar'
import Content from './components/Content'
import LoginModal from './components/LoginModal';

import {getToken} from './utils/signIn'

const ExpandedContainer = styled(Container)({
  maxWidth: "100vw",
  width: "100vw",
  height: "100vh",
  maxHeight: "100vh",
  overflow: "hidden",
  padding: 0,
  margin: 0,
})

export default () => {
  return (
      <ExpandedContainer>
        <Toolbar />
        <Content></Content>
        <LoginModal open={!getToken()}></LoginModal>
      </ExpandedContainer>
  )
}
