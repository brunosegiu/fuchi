import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from 'apollo-boost'

import { getToken } from '../utils/signIn'

const API_URI = 'http://localhost:1313/query'

const httpLink = new HttpLink({ uri: API_URI })

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: getToken(),
    },
  })
  return forward(operation)
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})
