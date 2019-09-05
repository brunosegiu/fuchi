import React from 'react'

import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { styled } from '@material-ui/core'

const NumberCard = styled(Card)({
  minWidth: 250,
  maxWidth: 250,
  width: 250,
  minHeight: 150,
  marginTop: '1vh',
})

export default ({ value, title, type, description, onCTA }) => {
  return (
    <NumberCard>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" component="h2">
          {value}
        </Typography>
        <Typography color="textSecondary">{type}</Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onCTA}>
          Learn More
        </Button>
      </CardActions>
    </NumberCard>
  )
}
