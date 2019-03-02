import { connect } from 'react-redux'
import getConfig from 'next/config'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-fetch'
import Main from 'layouts/Main'
import PostPage from 'components/PostPage'
import { fetchPost } from 'state/actions/posts'

const { publicRuntimeConfig, serverRuntimeConfig } = getConfig()

class About extends React.Component {
  static async getInitialProps ({ req, store, query }) {
    const { DOMAIN, BASE_URL } = (req) ? serverRuntimeConfig : publicRuntimeConfig
    const title = 'About'
    const content = 'shintech.ninja'

    let post

    try {
      let data = await fetch(`${BASE_URL}/api/posts/${query.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      post = await data.json()
    } catch (err) {
      throw new Error(err)
    }

    store.dispatch(fetchPost(post))

    return {
      DOMAIN,
      title,
      content
    }
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    DOMAIN: PropTypes.string.isRequired,
    post: PropTypes.object.isRequired
  }

  render () {
    const { post, DOMAIN } = this.props
    return (
      <Main size='20vh' title={post.data.title} domain={DOMAIN} favicon='/static/images/react.svg' >
        <PostPage post={post.data} />
      </Main>
    )
  }
}

export default connect(
  state => state,
  dispatch => ({ })
)(About)
