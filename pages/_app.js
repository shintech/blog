import App, { Container } from 'next/app'
import styled from 'styled-components'
import { Provider } from 'react-redux'
import { PageTransition } from 'next-page-transitions'
import { reduxPage } from 'state'
import 'isomorphic-unfetch'

/*  /pages/_app.js  */

class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps, store } = this.props
    const TIMEOUT = 500

    return (
      <Container>
        <Provider store={store}>
          <Wrapper>
            <PageTransition timeout={TIMEOUT} classNames='page-transition'>
              <Component {...pageProps} />
            </PageTransition>
          </Wrapper>
        </Provider>
      </Container>
    )
  }
}

const Wrapper = styled.div`
  .page-transition-enter {
    main {
      opacity: 0;
    }
    
    nav, .branding {
      opacity: 0;
    }    
  }
  .page-transition-enter-active {
    main {
      opacity: 1;
      transition: opacity 300ms;
    }
    
    nav, .branding {
      opacity: 1;
      transition: opacity 300ms;
    }       
  }
  .page-transition-exitm {
    main {
      opacity: 1;
    }
    
    nav, .branding {
      opacity: 1;
    }        
  }
  
  .page-transition-exit-active {
    main {
      opacity: 0;
      transition: opacity 300ms;
    }
    
    nav, .branding {
      opacity: 0;
      transition: opacity 300ms;
    }
  }
`

export default reduxPage(MyApp)
