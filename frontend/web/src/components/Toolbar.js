import React from 'react'

import { styled } from '@material-ui/styles'

import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import MoreIcon from '@material-ui/icons/MoreVert'
import Container from '@material-ui/core/Container'
import { Avatar } from '@material-ui/core'
import { UserContext } from '../contexts'

const CustomAppBar = styled(AppBar)({
  zIndex: 999999,
})

const CustomToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
})

const SectionContainer = styled(Container)({
  display: 'flex',
  alignItems: 'center',
  width: 'fit-content',
  padding: 0,
  margin: '0 1vw',
})

export default ({ open, setOpen }) => {
  const user = React.useContext(UserContext)
  return (
    <CustomAppBar position="fixed">
      <CustomToolbar disableGutters>
        <SectionContainer>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(!open)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Fuchi
          </Typography>
        </SectionContainer>
        <SectionContainer>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
          >
            <Avatar src={user && user.imageURL} />
          </IconButton>
          <IconButton
            aria-label="show more"
            aria-haspopup="true"
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </SectionContainer>
      </CustomToolbar>
    </CustomAppBar>
  )
}
