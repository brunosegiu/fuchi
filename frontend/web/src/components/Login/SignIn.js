import React from 'react'

import { GoogleLogin } from 'react-google-login'
import { useMutation } from '@apollo/react-hooks'

import { GOOGLE_CLIENT_ID } from '../../utils/constants'
import { handleSignIn, handleSignOut } from '../../utils/signIn'

export default () => {
  return (
    <GoogleLogin
      clientId={GOOGLE_CLIENT_ID}
      buttonText="Sign in with Google"
      onSuccess={({ tokenId }) => {
        handleSignIn(tokenId)
        window.location.reload()
      }}
      onFailure={() => null}
      cookiePolicy={'single_host_origin'}
    />
  )
}
