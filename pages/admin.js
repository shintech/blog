import { connect } from 'react-redux'
import getConfig from 'next/config'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-fetch'
import Admin from 'components/Admin'
import { createPostSuccess, createPostError, validation } from 'state/actions/posts'
import { redirectIfNotAuthenticated, getJwt, signOut } from 'lib/auth'
import redirect from 'lib/redirect'

const { publicRuntimeConfig, serverRuntimeConfig } = getConfig()

class About extends React.Component {
  static async getInitialProps (ctx) {
    if (redirectIfNotAuthenticated(ctx)) {
      return {}
    }

    const { DOMAIN, BASE_URL } = (ctx.req) ? serverRuntimeConfig : publicRuntimeConfig
    const admin = getJwt(ctx)

    return {
      admin,
      BASE_URL
    }
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    DOMAIN: PropTypes.string.isRequired
  }

  render () {
    return (
      <Admin { ...this.props }/>
    )
  }
}

export default connect(
  state => state,
  dispatch => ({
    createPost: async (post, host, admin) => {
      try {
        const response = await fetch(`${host}/api/posts`, {
          method: 'POST',
          body: JSON.stringify(post),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${admin}`
          }
        })

        const json = await response.json()

        dispatch(createPostSuccess(json))
        redirect(`/blog/${json.id}`)
      } catch (err) {
        dispatch(createPostError(err.message))
      }
    },

    validation: (value, type) => {
      dispatch(validation({ value, type }))
    },

    logout: () => signOut()
  })
)(About)
