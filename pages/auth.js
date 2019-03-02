import { connect } from 'react-redux'
import getConfig from 'next/config'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-fetch'
import LoginForm from 'components/LoginForm'
import { loginAttempt, loginSuccess, loginFailure } from 'state/actions/users'
import redirect from 'lib/redirect'
import { redirectIfAuthenticated, getJwt, signIn } from 'lib/auth'

const { publicRuntimeConfig, serverRuntimeConfig } = getConfig()

class About extends React.Component {
  static async getInitialProps (ctx) {
    if (redirectIfAuthenticated(ctx)) {
      return {}
    }

    const { DOMAIN, BASE_URL } = (ctx.req) ? serverRuntimeConfig : publicRuntimeConfig

    return {
      BASE_URL
    }
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    DOMAIN: PropTypes.string.isRequired
  }

  render () {
    const { BASE_URL, login } = this.props

    return (
      <LoginForm login={login} host={BASE_URL}/>
    )
  }
}

export default connect(
  state => state,
  dispatch => ({
    login: async ({ username, password, host }) => {
      try {
        let raw = await fetch(`${host}/api/login`, {
          method: 'POST',
          body: JSON.stringify({
            username,
            password
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        })

        let json = await raw.json()

        if (json.token) {
          signIn(json.token)
          dispatch(loginSuccess())
        } else {
          dispatch(loginFailure())
        }
      } catch (err) {
        dispatch(loginFailure())
      }
    }

  })
)(About)
