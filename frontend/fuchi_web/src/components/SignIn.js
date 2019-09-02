import React from 'react'

import { GoogleLogin } from 'react-google-login'

import { GOOGLE_CLIENT_ID } from '../utils/constants'

const onResponse = response => {
  console.log(response)
}

export default () => {
  return (
    <GoogleLogin
      clientId={GOOGLE_CLIENT_ID}
      buttonText="Login"
      onSuccess={onResponse}
      onFailure={onResponse}
      cookiePolicy={'single_host_origin'}
    />
  )
}
