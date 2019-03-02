import { Motion, spring } from 'react-motion'
import PropTypes from 'prop-types'
import Wrapper from './wrapper'
import theme from './theme'

const Parallax = ({ image, trees, increment = () => {}, decrement = () => {} }) => {
  return (
    <Wrapper theme={{ image }} >
      <div className='parallax' />
    </Wrapper>
  )
}

Parallax.propTypes = {
  trees: PropTypes.object.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
}

export default Parallax
