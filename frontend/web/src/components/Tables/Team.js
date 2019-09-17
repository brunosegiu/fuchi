import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import TableHead from '@material-ui/core/TableHead'
import { Chip, Avatar } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: '250px',
    width: '52vw',
    marginTop: theme.spacing(3),
    padding: 0,
    margin: 0,
  },
  table: {
    minWidth: '100%',
  },
}))

const sort = (team1, team2) => {
  const cond = team1.players.length > team2.players.length
  const longest = cond ? team1 : team2
  const shortest = !cond ? team1 : team2
  return { longest, shortest }
}

const UserChip = ({ player: { user, skill } }) => {
  return (
    <Chip
      avatar={
        <Avatar alt={user.nickname} src={user.imageURL}>
          {user.nickname}
        </Avatar>
      }
      label={`${user.nickname} (${skill})`}
    />
  )
}

export default ({ team1 = { players: [] }, team2 = { players: [] } }) => {
  const classes = useStyles()
  const { longest, shortest } = sort(team1, team2)

  return (
    <Container className={classes.root}>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align="left">Team 1</TableCell>
              <TableCell align="right">Team 2</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {longest.players.map((player, index) => {
              const player2 = shortest.players[index]
              return (
                <TableRow key={player.userId}>
                  <TableCell component="th" scope="row">
                    <UserChip player={player || {}}></UserChip>
                  </TableCell>
                  <TableCell align="right">
                    <UserChip player={player2 || {}}></UserChip>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  )
}
