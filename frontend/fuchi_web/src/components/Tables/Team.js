import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import TableHead from '@material-ui/core/TableHead'

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

const rows = [
  { t1: 'Tryole1', t2: 'Tryole2' },
  { t1: 'Tryole1', t2: 'Tryole2' },
  { t1: 'Tryole1', t2: 'Tryole2' },
]

export default () => {
  const classes = useStyles()

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
            {rows.map(row => (
              <TableRow key={row.t1}>
                <TableCell component="th" scope="row">
                  {row.t1}
                </TableCell>
                <TableCell align="right">{row.t2}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  )
}
