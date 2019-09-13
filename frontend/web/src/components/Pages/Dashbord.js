import React from 'react'

import styled from '@emotion/styled'

import NumberCard from '../Stats/Number'
import Match from '../Stats/Match'

const values = [
  {
    value: 10,
    title: 'Games won',
    type: 'Score',
    description: "How many matches you've won",
    onCTA: () => null,
  },
  {
    value: 5,
    title: 'Games drawn',
    type: 'Score',
    description: "How many matches you've drawn",
    onCTA: () => null,
  },
  {
    value: 8,
    title: 'Games lost',
    type: 'Score',
    description: "How many matches you've lost",
    onCTA: () => null,
  },
  {
    value: 57.5,
    title: 'Overall score',
    type: 'Score',
    description: 'Your overall score (0,100)',
    onCTA: () => null,
  },
]

const TopContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  alignItems: 'center',
})

const CardsContainer = styled.div({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap',
})

export default () => {
  return (
    <TopContainer>
      <CardsContainer>
        {values.map(entry => (
          <NumberCard {...entry}></NumberCard>
        ))}
      </CardsContainer>
      <Match></Match>
    </TopContainer>
  )
}
