const TOKEN_KEY = 'idToken'

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY)
}

export const handleSignIn = idToken => {
  localStorage.setItem(TOKEN_KEY, idToken)
}

export const handleSignOut = () => {
  localStorage.clear()
}
