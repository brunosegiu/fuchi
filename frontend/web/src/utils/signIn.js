const TOKEN_KEY = 'token'

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY)
}

export const handleSignIn = token => {
  localStorage.setItem(TOKEN_KEY, token)
  window.location = '/'
}

export const handleSignOut = () => {
  localStorage.clear()
  window.location = '/'
}
