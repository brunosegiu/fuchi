import gql from 'graphql-tag'

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
