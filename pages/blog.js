import { connect } from 'react-redux'
import getConfig from 'next/config'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-fetch'
import Main from 'layouts/Main'
import PostList from 'components/PostList'
import { fetchPosts } from 'state/actions/posts'
import ContactInfo from 'components/ContactInfo'

const info = { // TODO make this an environment variable
  address: 'Tulsa, OK',
  phone: '918-555-5555',
  email: 'email@example.org'
}

const { publicRuntimeConfig, serverRuntimeConfig } = getConfig()

class Blog extends React.Component {
  static async getInitialProps ({ req, store }) {
    const { DOMAIN, BASE_URL } = (req) ? serverRuntimeConfig : publicRuntimeConfig
    const title = 'blog'

    let posts

    try {
      let data = await fetch(`${BASE_URL}/api/posts`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      posts = await data.json()
    } catch (err) {
      throw new Error(err)
    }

    store.dispatch(fetchPosts(posts))

    return {
      DOMAIN,
      title
    }
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    DOMAIN: PropTypes.string.isRequired,
    posts: PropTypes.object.isRequired
  }

  render () {
    const { title, posts, DOMAIN } = this.props

    return (
      <Main title={title} domain={DOMAIN} favicon='/static/images/react.svg' >
        <PostList posts={posts} />
      </Main>
    )
  }
}

export default connect(
  state => state,
  dispatch => ({
    fetchPosts: () => {}

  })
)(Blog)
