import PropTypes from 'prop-types'
import Wrapper from './wrapper'

const Content = ({ title, content }) =>
  <Wrapper>
    <h1 className='header'>{title}</h1>
    <p className='content'>{content}</p>
  </Wrapper>

Content.propTypes = {
  content: PropTypes.string.isRequired
}

export default Content
