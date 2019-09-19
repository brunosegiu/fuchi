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

export const CREATE_USER = gql`
  mutation CreateUser(
    $nickname: String!
    $idToken: String
    $email: String
    $externalId: String
    $imageURL: String
  ) {
    createUser(
      nickname: $nickname
      idToken: $idToken
      email: $email
      externalId: $externalId
      imageURL: $imageURL
    ) {
      id
      nickname
      email
      externalId
      imageURL
    }
  }
`

export const CREATE_AUTH_USER = gql`
  mutation CreateAuthUser($idToken: String!) {
    createAuthUser(idToken: $idToken)
  }
`
