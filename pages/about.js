import { connect } from 'react-redux'
import getConfig from 'next/config'
import PropTypes from 'prop-types'
import Main from 'layouts/Main'
import Content from 'components/Content'
import ContactInfo from 'components/ContactInfo'

const info = { // TODO make this an environment variable
  address: 'Tulsa, OK',
  phone: '918-555-5555',
  email: 'email@example.org'
}

const { publicRuntimeConfig, serverRuntimeConfig } = getConfig()

class About extends React.Component {
  static async getInitialProps ({ req, store }) {
    const { DOMAIN } = (req) ? serverRuntimeConfig : publicRuntimeConfig
    const title = 'About'
    const content = 'shintech.ninja'

    return {
      DOMAIN,
      title,
      content
    }
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    DOMAIN: PropTypes.string.isRequired
  }

  render () {
    const { title, content, DOMAIN } = this.props

    return (
      <Main title={title} domain={DOMAIN} favicon='/static/images/react.svg' >
        <Content title={title} content={ content } />
        <hr />
        <ContactInfo info={info} />
      </Main>
    )
  }
}

export default connect(
  state => state,
  dispatch => ({ })
)(About)
