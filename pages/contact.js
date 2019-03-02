import { connect } from 'react-redux'
import getConfig from 'next/config'
import PropTypes from 'prop-types'
import Main from 'layouts/Main'
import ContactInfo from 'components/ContactInfo'

const info = { // TODO make this an environment variable
  address: 'Tulsa, OK',
  phone: '918-555-5555',
  email: 'email@example.org'
}

const { publicRuntimeConfig, serverRuntimeConfig } = getConfig()

class Home extends React.Component {
  static async getInitialProps ({ req, store }) {
    const { DOMAIN } = (req) ? serverRuntimeConfig : publicRuntimeConfig

    return {
      title: 'Contact',
      DOMAIN
    }
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    DOMAIN: PropTypes.string.isRequired,
    PKG: PropTypes.object.isRequired
  }

  render () {
    const { title, DOMAIN } = this.props

    return (
      <Main title={title} domain={DOMAIN} favicon='/static/images/nodejs-icon.svg'>
        <ContactInfo info={info} />
      </Main>
    )
  }
}

export default connect(
  state => state,
  dispatch => ({ })
)(Home)
