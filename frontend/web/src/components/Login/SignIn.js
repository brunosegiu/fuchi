import React from 'react'

import { GoogleLogin } from 'react-google-login'
import { useMutation } from '@apollo/react-hooks'

import { GOOGLE_CLIENT_ID } from '../../utils/constants'
import { CREATE_USER } from '../../queries/user'
import { handleSignIn, handleSignOut } from '../../utils/signIn'

const getUserParams = response => {
  const { googleId, tokenId, profileObj } = response
  const { email, name, imageUrl } = profileObj
  const params = {
    email,
    nickname: name,
    imageURL: imageUrl,
    externalId: googleId,
    idToken: tokenId,
  }
  handleSignIn(params)
  return params
}

export default () => {
  const [createUser, { data, error }] = useMutation(CREATE_USER)
  if (error) {
    handleSignOut()
  } else if (data && data.createUser) {
    window.location = '/dashboard'
  }
  return (
    <GoogleLogin
      clientId={GOOGLE_CLIENT_ID}
      buttonText="Sign in with Google"
      onSuccess={res => {
        const params = getUserParams(res)
        createUser({ variables: params })
      }}
      onFailure={() => null}
      cookiePolicy={'single_host_origin'}
    />
  )
}
