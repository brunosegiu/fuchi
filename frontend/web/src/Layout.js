import React from 'react'

import Container from '@material-ui/core/Container'
import { styled } from '@material-ui/styles'
import { useQuery } from '@apollo/react-hooks'

import Toolbar from './components/Toolbar'
import Content from './components/Content'
import LoginModal from './components/Login/LoginModal'

import { ME } from './queries/user'
import { getToken } from './utils/signIn'
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
  const { loading, error, data } = useQuery(ME)
  return (
    <UserContext.Provider value={data && data.me}>
      <ExpandedContainer>
        <Toolbar open={openDrawer} setOpen={setDrawerOpen} />
        <Content open={openDrawer} setOpen={setDrawerOpen}></Content>
        <LoginModal open={!getToken()}></LoginModal>
      </ExpandedContainer>
    </UserContext.Provider>
  )
}
