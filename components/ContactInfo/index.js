import PropTypes from 'prop-types'
import Wrapper from './wrapper'

const ContactInfo = ({ info }) =>
  <Wrapper>
    <div className='sidebar'>
      <div className='block'>
        <h3 className='heading'>Contact</h3>
        <div className='address'>
          { info.address }
        </div>
        <div className='phone'>{ info.phone }</div>
        <div className='email'><a href='#'>{ info.email }</a></div>
      </div>

      <div className='block'>
        <h3 className='heading'>About</h3>
        <p>About this site</p>
      </div>
    </div>
  </Wrapper>

ContactInfo.propTypes = {
  info: PropTypes.object.isRequired
}

export default ContactInfo
