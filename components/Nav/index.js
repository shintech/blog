import Link from './ActiveLink'
// import PropTypes from 'prop-types'
import Wrapper from './wrapper'
import theme from './theme'
// import SVG from 'static/images/nodejs.svg'

// function toggleResponsive () { // TODO create redux action
//   var x = document.getElementById('container')
//   if (x.classList.contains('responsive')) {
//     x.classList.remove('responsive')
//   } else {
//     x.classList.add('responsive')
//   }
// }

const Nav = () =>
  <Wrapper theme={theme()}>
    <ul>
      <Link key='home' prefetch activeClassName='active' route='/'><a className='nav-link'>home</a></Link>
      <Link key='about' prefetch activeClassName='active' route='/about'><a className='nav-link'>about</a></Link>
      <Link key='blog' prefetch activeClassName='active' route='/blog'><a className='nav-link'>blog</a></Link>
      <Link key='contact' prefetch activeClassName='active' route='/contact'><a className='nav-link'>contact</a></Link>
    </ul>
  </Wrapper>

Nav.propTypes = {}

export default Nav
