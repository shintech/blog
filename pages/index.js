import { connect } from 'react-redux'
import getConfig from 'next/config'
import PropTypes from 'prop-types'
import Main from 'layouts/Main'
import Content from 'components/Content'
import ContactInfo from 'components/ContactInfo'
import Parallax from 'components/Parallax'
import actions from 'state/actions/trees'

const { publicRuntimeConfig, serverRuntimeConfig } = getConfig()

const info = { // TODO make this an environment variable
  address: 'Tulsa, OK',
  phone: '918-555-5555',
  email: 'email@example.org'
}

class Home extends React.Component {
  static async getInitialProps ({ req, store }) {
    const { DOMAIN } = (req) ? serverRuntimeConfig : publicRuntimeConfig
    const title = 'Home'
    const content = 'shintech.ninja'

    return {
      title,
      content,
      DOMAIN
    }
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    trees: PropTypes.object.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    DOMAIN: PropTypes.string.isRequired
  }

  render () {
    const { title, content, DOMAIN } = this.props

    return (
      <Main size='91vh' title={title} domain={DOMAIN} favicon='/static/images/nodejs-icon.svg'>
        <Content content={content} title={title}/>
        <Parallax image='url("/static/images/ai2.jpg")'/>
        <Content content='shintech.ninja' title='about'/>
        <Parallax image='url("/static/images/ai3.jpg")'/>
        <ContactInfo info={info}/>
      </Main>
    )
  }
}

export default connect(
  state => state,

  dispatch => ({
    increment: (value) => {
      dispatch(actions.increment(value))
    },
    decrement: (value) => {
      dispatch(actions.decrement(value))
    }
  })
)(Home)
