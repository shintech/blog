import redirect from 'lib/redirect'
import { setCookie, getCookie, removeCookie } from 'lib/session'

export const signIn = (token) => {
  setCookie('token', token)
  redirect('/admin')
  return null
}

export const signOut = (ctx = {}) => {
  if (process.browser) {
    removeCookie('token')
    redirect('/auth', ctx)
  }
}

export const getJwt = ctx => {
  return getCookie('token', ctx.req)
}

export const isAuthenticated = ctx => !!getJwt(ctx)

export const redirectIfAuthenticated = ctx => {
  if (isAuthenticated(ctx)) {
    redirect('/admin', ctx)
    return true
  }
  return false
}

export const redirectIfNotAuthenticated = ctx => {
  if (!isAuthenticated(ctx)) {
    redirect('/auth', ctx)
    return true
  }
  return false
}
