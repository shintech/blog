import C from 'state/constants'

const initialState = {
  error: false,
  loggedIn: false
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case C.LOGIN_ATTEMPT:
      return { ...state, data: action.payload }

    case C.LOGIN_SUCCESS:
      return { ...state, loggedIn: true }

    case C.LOGIN_ERROR:
      return { ...state, error: action.payload }

    default:
      return state
  }
}

export default users
