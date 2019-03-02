import { Link } from 'routes'
import PropTypes from 'prop-types'
import Wrapper from './wrapper'
import moment from 'moment'

const Title = ({ post }) =>
  <Wrapper>
    <header>
      <Link prefetch route='post' params={{ id: post.id }}><a className='post-link-created post-link'><time>{moment(post.created_at).format('LL')}</time></a></Link> <span className='post-author'> by {post.author}</span><br />
      <Link prefetch route='post' params={{ id: post.id }}><a className='post-title post-link'>{post.title}</a></Link>
      <div className='post-description'>{post.description}</div>
    </header>
  </Wrapper>

Title.propTypes = {
  post: PropTypes.object.isRequired
}

export default Title
