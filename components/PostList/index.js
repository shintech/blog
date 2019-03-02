import Post from 'components/Post'
import ContactInfo from 'components/ContactInfo'
import PropTypes from 'prop-types'
import Wrapper from './wrapper'

const info = { // TODO make this an environment variable
  address: 'Tulsa, OK',
  phone: '918-555-5555',
  email: 'email@example.org'
}

const PostList = ({ posts }) =>
  <Wrapper>
    <div className='post-list'>
      { posts.data.map((post, n) => {
        return <Post key={post.id} post={post} />
      })}
    </div>

    <ContactInfo info={info} />
  </Wrapper>

PostList.propTypes = {
  posts: PropTypes.object.isRequired
}

export default PostList
