import PropTypes from 'prop-types'
import Wrapper from './Wrapper'

const LoginForm = ({ login, host }) => {
  let _username, _password

  const submit = e => {
    e.preventDefault()

    let username = _username.value
    let password = _password.value

    login({ username, password, host })
  }

  return (
    <Wrapper>
      <h1 className='heading'>Please log in!</h1>
      <hr />
      <form className='flex' onSubmit={submit}>
        <ul className='form-style'>
          <li className='form-group'>
            <label>Username</label>
            <input required ref={input => _username = input} type='text' placeholder='Username' />
          </li>

          <li className='form-group'>
            <label>Password</label>
            <input required ref={input => _password = input} type='password' placeholder='Password' />
          </li>

          <li className='button-group'>
            <button type='submit' className='submit'>Submit</button>
          </li>
          <li />
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
