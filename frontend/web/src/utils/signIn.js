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

export const getCurrentUser = () => {
  const user = {
    email: localStorage.getItem('email'),
    nickname: localStorage.getItem('nickname'),
    imageURL: localStorage.getItem('imageURL'),
    externalId: localStorage.getItem('externalId'),
    idToken: localStorage.getItem('idToken'),
  }
  return Object.values(user).some(p => !p) ? null : user
}
