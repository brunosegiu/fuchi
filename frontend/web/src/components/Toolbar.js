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
import AccountCircle from '@material-ui/icons/AccountCircle'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import { UserContext } from '../contexts'
import { handleSignOut } from '../utils/signIn'

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

const UserMenu = ({ anchor, handleMenuClose }) => (
  <Menu
    anchorEl={anchor}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    id="account_menu"
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    open={!!anchor}
    onClose={handleMenuClose}
  >
    <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
    <MenuItem onClick={() => handleSignOut()}>Sign out</MenuItem>
  </Menu>
)

export default ({ open, setOpen }) => {
  const user = React.useContext(UserContext)
  const [menuAnchor, setMenuAnchor] = React.useState(null)

  return (
    <React.Fragment>
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
              {user ? (
                <Avatar src={user.imageURL} color="primary">
                  {user.nickname ? user.nickname[0] : 'F'}
                </Avatar>
              ) : (
                <AccountCircle></AccountCircle>
              )}
            </IconButton>
            <IconButton
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
              onClick={event => {
                setMenuAnchor(menuAnchor ? null : event.currentTarget)
              }}
            >
              <MoreIcon />
            </IconButton>
          </SectionContainer>
        </CustomToolbar>
      </CustomAppBar>
      <UserMenu
        anchor={menuAnchor}
        handleMenuClose={() => setMenuAnchor(null)}
      />
    </React.Fragment>
  )
}
