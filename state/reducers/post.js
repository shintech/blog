import C from 'state/constants'

const initialState = {
  title: '',
  description: '',
  content: ''
}

const post = (state = initialState, action) => {
  switch (action.type) {
    case C.FETCH_POST:
      return { ...state, data: action.payload, loading: false, error: false }

    case C.CREATE_POST:
      return { ...state, data: action.payload }

    case C.CREATE_POST_ERROR:
      return { ...state, error: action.payload }

    case C.VALIDATE_TITLE:
      return { ...state, title: action.payload.value }

    case C.VALIDATE_DESCRIPTION:
      return { ...state, description: action.payload.value }

    case C.VALIDATE_CONTENT:
      return { ...state, content: action.payload.value }

    case C.VALIDATION_ERROR:
      return { ...state, ...action.payload }

    default:
      return state
  }
}

export default post
