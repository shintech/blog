// import PropTypes from 'prop-types'
import Wrapper from './wrapper'
// import SVG from 'static/images/nodejs.svg'

const Header = ({ size }) =>
  <Wrapper theme={{ size }}>
    <div className='header-media'>
      <div className='branding'>
        <h1><a className='branding-text' href='#'>shintech.ninja</a></h1>
        <p className='branding-description'>Southern Heartland Integral Technology</p>
      </div>
    </div>
  </Wrapper>

Header.propTypes = {}

export default Header
