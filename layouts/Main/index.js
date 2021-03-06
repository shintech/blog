import Head from 'next/head'
import PropTypes from 'prop-types'
import Header from 'components/Header'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
// import SVG from 'static/images/nextjs.svg'
import Wrapper from './wrapper'

const Main = ({ size = '42vh', children, title, domain, favicon = '/static/images/favicon.png' }) =>
  <Wrapper>
    <Head>
      <title>{ title } | {domain} </title>
      <link rel='icon' type='image/png' href={favicon} />
    </Head>

    <Header size={size} />
    <Nav />

    <main>
      { children }
    </main>

    <Footer domain={domain} />
  </Wrapper>

Main.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  domain: PropTypes.string.isRequired,
  favicon: PropTypes.string
}

export default Main
