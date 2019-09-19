import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Checkbox from '@material-ui/core/Checkbox'
import Avatar from '@material-ui/core/Avatar'
import { Paper, IconButton, Typography } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Search from '@material-ui/icons/Search'
import Add from '@material-ui/icons/Add'

import { useQuery, useMutation } from '@apollo/react-hooks'

import { FIND } from '../../queries/user'
import { CREATE_USER } from '../../queries/user'

const ListContainer = styled(Paper)({
  maxWidth: '400px',
  width: '30%',
})

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    maxHeight: '50vh',
    overflowY: 'scroll',
  },
  search: {
    width: '100%',
    padding: 5,
  },
  inputWrapper: {
    width: '80%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  input: {
    width: '100%',
  },
  count: {
    marginLeft: '10px',
  },
}))

export default ({ checked, setChecked }) => {
  const classes = useStyles()

  const [search, setSearch] = React.useState('')

  const { loading, error, data: userData } = useQuery(FIND, {
    variables: { nickname: search },
  })
  const users = userData ? userData.findUsers : []

  const handleToggle = user => () => {
    const newChecked = { ...checked }
    if (newChecked[user.id]) {
      delete newChecked[user.id]
    } else {
      newChecked[user.id] = user
    }
    setChecked(newChecked)
  }

  const [createUser] = useMutation(CREATE_USER, {
    onCompleted: ({ createUser: user }) => {
      handleToggle(user)()
    },
  })

  return (
    <ListContainer>
      <Grid
        container
        spacing={1}
        className={classes.search}
        alignItems="flex-end"
        justify="center"
      >
        <Grid item>
          <Search />
        </Grid>
        <Grid item className={classes.inputWrapper}>
          <TextField
            value={search}
            onChange={event => setSearch(event.target.value)}
            label="Search players"
            className={classes.input}
          />
        </Grid>
        <Grid item className={classes.count}>
          <Typography>{Object.keys(checked).length}</Typography>
        </Grid>
      </Grid>
      <List dense className={classes.root}>
        {users.map(user => {
          const { id, nickname, imageURL } = user
          const labelId = `checkbox-list-secondary-label-${id}`
          return (
            <ListItem key={id} button onClick={handleToggle(user)}>
              <ListItemAvatar>
                <Avatar src={imageURL} alt={nickname[0]} />
              </ListItemAvatar>
              <ListItemText
                id={labelId}
                primary={nickname}
                secondary={`Win ratio: N/A`}
              />
              <ListItemSecondaryAction>
                <Checkbox
                  edge="end"
                  onChange={handleToggle(user)}
                  checked={!!checked[user.id]}
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemSecondaryAction>
            </ListItem>
          )
        })}
        {!!search && (
          <ListItem key="new-user" button>
            <ListItemAvatar>
              <Avatar>{search[0].toUpperCase()}</Avatar>
            </ListItemAvatar>
            <ListItemText
              id={'new-user'}
              primary={search}
              secondary={`Win ratio: N/A`}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                onClick={() => {
                  createUser({ variables: { nickname: search } })
                }}
              >
                <Add></Add>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        )}
      </List>
    </ListContainer>
  )
}
