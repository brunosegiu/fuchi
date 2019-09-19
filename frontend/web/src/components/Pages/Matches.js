import React from 'react'

import styled from '@emotion/styled'

import CreateMatch from '../Steps/CreateMatch'

const TopContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  alignItems: 'center',
})

export default () => {
  return (
    <TopContainer>
      <CreateMatch></CreateMatch>
    </TopContainer>
  )
}
