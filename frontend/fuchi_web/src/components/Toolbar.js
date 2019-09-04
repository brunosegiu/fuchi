import React from 'react'

import { styled } from '@material-ui/styles';


import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import Badge from '@material-ui/core/Badge'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MailIcon from '@material-ui/icons/Mail'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MoreIcon from '@material-ui/icons/MoreVert'
import  Container  from '@material-ui/core/Container';

const CustomToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: "space-between"
})

const SectionContainer = styled(Container)({
  display: "flex",
  alignItems: "center",
  width: "fit-content",
  padding: 0,
  margin: "0 1vw"
})

export default () => {
  return (
    <AppBar position="static">
      <CustomToolbar disableGutters>
        <SectionContainer>
        <IconButton edge="start" color="inherit" aria-label="open drawer">
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
          <AccountCircle />
        </IconButton>
        <IconButton aria-label="show more" aria-haspopup="true" color="inherit">
          <MoreIcon />
        </IconButton>
        </SectionContainer>
      </CustomToolbar>
    </AppBar>
  )
}
