import PropTypes from 'prop-types'
import Wrapper from './Wrapper'

const LoginForm = ({ createPost, logout, host, admin, validation, post, BASE_URL }) => {
  const validate = (e, type) => {
    e.preventDefault()
    validation(e.target.value, type)
  }

  const submit = (e) => {
    e.preventDefault()
    createPost(post, BASE_URL, admin)
  }

  return (
    <Wrapper>
      <h1 className='heading'>Create a post!</h1>
      <hr />
      <form className='flex' onSubmit={submit}>
        <ul>
          <li>
            <label htmlFor='title'>Title</label>
            <input required name='title' onChange={e => { validate(e, 'title') } } value={post.title} type='text' placeholder='Title' />
          </li>

          <li>
            <label htmlFor='description'>Description</label>
            <input required name='description' onChange={e => { validate(e, 'description') } } value={post.description} type='text' placeholder='Description' />
          </li>

          <li>
            <label htmlFor='content'>Content</label>
            <textarea required name='content' onChange={e => { validate(e, 'content') } } value={post.content} type='textarea' placeholder='Content' />
          </li>

          <li className='button-group'>
            <button type='button' onClick={logout} className='logout'>logout</button>
            <button type='submit' className='submit'>Submit</button>
          </li>
        </ul>
      </form>
    </Wrapper>
  )
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  token: PropTypes.node.isRequired
}

export default LoginForm
