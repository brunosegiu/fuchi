import gql from 'graphql-tag'

export const ME = gql`
  {
    me {
      id
      nickname
      email
      externalId
      imageURL
    }
  }
`

export const FIND = gql`
  query FindUsers($nickname: String!) {
    findUsers(nickname: $nickname) {
      id
      nickname
      email
      externalId
      imageURL
    }
  }
`

export const CREATE_USER = gql`
  mutation CreateUser($nickname: String!) {
    createUser(nickname: $nickname) {
      id
      nickname
    }
  }
`

export const CREATE_AUTH_USER = gql`
  mutation CreateAuthUser($idToken: String!) {
    createAuthUser(idToken: $idToken)
  }
`
