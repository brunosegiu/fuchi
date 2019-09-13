import React from 'react'

import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'

import { DRAWER_WIDTH } from '../utils/constants'

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  drawer: {
    width: DRAWER_WIDTH,
  },
}))

export default ({ open, setOpen }) => {
  const classes = useStyles()

  return (
    <Drawer
      open={open}
      onClose={() => setOpen(false)}
      variant="persistent"
      anchor="left"
    >
      <div className={classes.toolbar}></div>
      <List>
        {['Dashboard'].map((text, index) => (
          <Link
            to="/dashboard"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {['Matches', 'Leaderboard'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}
