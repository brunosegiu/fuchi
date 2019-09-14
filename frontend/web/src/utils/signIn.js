export const getToken = () => {
  return localStorage.getItem('idToken')
}

export const handleSignIn = userInfo => {
  Object.entries(userInfo).forEach(([key, value]) =>
    localStorage.setItem(key, value),
  )
}

export const handleSignOut = () => {
  localStorage.clear()
}
