import React from 'react'

import Container from '@material-ui/core/Container'
import { styled } from '@material-ui/styles'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'

import Toolbar from './components/Toolbar'
import Content from './components/Content'
import LoginModal from './components/Login/LoginModal'

import { getToken, getCurrentUser } from './utils/signIn'
import { client } from './queries/client'
import { UserContext } from './contexts'

const ExpandedContainer = styled(Container)({
  maxWidth: '100vw',
  width: '100vw',
  height: '100vh',
  maxHeight: '100vh',
  overflowY: 'scroll',
  padding: 0,
  margin: 0,
})

export default () => {
  const [openDrawer, setDrawerOpen] = React.useState(false)

  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <UserContext.Provider value={getCurrentUser()}>
          <ExpandedContainer>
            <Toolbar open={openDrawer} setOpen={setDrawerOpen} />
            <Content open={openDrawer} setOpen={setDrawerOpen}></Content>
            <LoginModal open={!getToken()}></LoginModal>
          </ExpandedContainer>
        </UserContext.Provider>
      </ApolloProvider>
    </BrowserRouter>
  )
}
