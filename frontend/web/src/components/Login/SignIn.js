import React from 'react'

import { GoogleLogin } from 'react-google-login'
import { useMutation } from '@apollo/react-hooks'

import { CREATE_AUTH_USER } from '../../queries/user'

import { GOOGLE_CLIENT_ID } from '../../utils/constants'
import { handleSignIn } from '../../utils/signIn'

export default () => {
  const [createUser, { data }] = useMutation(CREATE_AUTH_USER)

  if (data && data.createAuthUser) {
    console.log(data)
    handleSignIn(data.createAuthUser)
    window.location.reload()
  }

  return (
    <GoogleLogin
      clientId={GOOGLE_CLIENT_ID}
      buttonText="Sign in with Google"
      onSuccess={({ tokenId }) => {
        createUser({ variables: { idToken: tokenId } })
      }}
      onFailure={() => null}
      cookiePolicy={'single_host_origin'}
    />
  )
}
