import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Checkbox from '@material-ui/core/Checkbox'
import Avatar from '@material-ui/core/Avatar'
import { Paper, IconButton } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Search from '@material-ui/icons/Search'
import Add from '@material-ui/icons/Add'

const ListContainer = styled(Paper)({
  maxWidth: '400px',
  width: '30%',
})

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  search: {
    width: '90%',
    padding: 5,
  },
  inputWrapper: {
    width: '80%',
    display: 'flex',
  },
  input: {
    width: '100%',
  },
}))

const users = [
  {
    id: '1700d90a-3f8c-4d14-b470-f5e6119cd320',
    nickname: 'Bruno Sena',
    email: 'brunosegiu@gmail.com',
    externalId: '115927929319222074078',
    imageURL:
      'https://lh3.googleusercontent.com/a-/AAuE7mC0ENwQ7XtiRP70uoYFNi5Q4ajMcJwpWbRjwf8U=s96-c',
  },
  {
    id: '1700d90324a-3f8c-4d14-b470-f5e6119cd320',
    nickname: 'Pepe',
    email: 'brunosegiu@gmail.com',
    externalId: '115927929319222074078',
    imageURL:
      'https://lh3.googleusercontent.com/a-/AAuE7mC0ENwQ7XtiRP70uoYFN45Q4ajMcJwpWbRjwf8U=s96-c',
  },
  {
    id: '1700d90a-3f8234c-4d14-b470-f5e6119cd320',
    nickname: 'Tano',
    email: 'brunosegiu@gmail.com',
    externalId: '115927929319222074078',
    imageURL:
      'https://lh3.googleusercontent.com/a-/AAuE7mC0ENwQ7XtiaP70uoYFNi5Q4ajMcJwpWbRjwf8U=s96-c',
  },
]

export default ({ addPlayers }) => {
  const classes = useStyles()
  const [checked, setChecked] = React.useState(new Set())
  const [search, setSearch] = React.useState('')

  const handleToggle = userId => () => {
    const newChecked = new Set(checked)
    if (checked.has(userId)) {
      newChecked.delete(userId)
    } else {
      newChecked.add(userId)
    }
    setChecked(newChecked)
  }

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
      </Grid>
      <List dense className={classes.root}>
        {users.map(({ id, nickname, imageURL }) => {
          const labelId = `checkbox-list-secondary-label-${id}`
          return (
            <ListItem key={id} button onClick={handleToggle(id)}>
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
                  onChange={handleToggle(id)}
                  checked={checked.has(id)}
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
                  //Add user
                  setSearch('')
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
