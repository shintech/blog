import C from 'state/constants'

export function loginAttempt () {
  return {
    type: C.LOGIN_ATTEMPT
  }
}

export function loginSuccess () {
  return {
    type: C.LOGIN_SUCCESS
  }
}

export function loginFailure () {
  return {
    type: C.LOGIN_FAILURE
  }
}
