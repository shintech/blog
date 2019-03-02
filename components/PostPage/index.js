import PropTypes from 'prop-types'
import Wrapper from './wrapper'
import marked from 'marked'
import Highlight from 'react-highlight'
import moment from 'moment'

marked.setOptions({
  gfm: true,
  tables: true,
  breaks: true
})

const Title = ({ post }) =>
  <Wrapper>
    <h1 className='post-title'>{post.title}</h1>
    <div><span className='post-created'>{moment(post.created_at).format('LL')}</span> <span className='post-author'>by {post.author}</span></div>
    <div className='post-description'>{post.description}</div>
    <hr />
    <Highlight innerHTML>
      {marked(post.content)}
    </Highlight>
  </Wrapper>

Title.propTypes = {
  post: PropTypes.object.isRequired
}

export default Title
