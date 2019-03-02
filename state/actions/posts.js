import C from 'state/constants'

export function fetchPosts (posts) {
  return {
    type: C.FETCH_POSTS,
    payload: posts
  }
}

export function fetchPost (post) {
  return {
    type: C.FETCH_POST,
    payload: post
  }
}

export function createPostSuccess (post) {
  return {
    type: C.CREATE_POST,
    payload: post
  }
}

export function createPostError (error) {
  return {
    type: C.CREATE_POST_ERROR,
    payload: error
  }
}

export function validation (payload) {
  let type

  if (payload.type === 'title') { type = 'VALIDATE_TITLE' }
  if (payload.type === 'content') { type = 'VALIDATE_CONTENT' }
  if (payload.type === 'description') { type = 'VALIDATE_DESCRIPTION' }

  return {
    type,
    payload
  }
}
