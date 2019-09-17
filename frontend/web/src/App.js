import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'

import { client } from './queries/client'
import Layout from './Layout'

export default () => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Layout />
      </ApolloProvider>
    </BrowserRouter>
  )
}
