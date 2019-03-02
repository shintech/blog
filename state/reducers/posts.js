import C from 'state/constants'

const initialState = {
  error: false,
  loading: true,
  post: {
    title: '',
    description: '',
    content: ''
  }
}

const posts = (state = initialState, action) => {
  switch (action.type) {
    case C.FETCH_POSTS:
      return { ...state, data: action.payload, loading: false, error: false }

    default:
      return state
  }
}

export default posts
