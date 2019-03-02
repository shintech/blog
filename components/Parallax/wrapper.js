import styled from 'styled-components'

const Wrapper = styled.div`
  .parallax {
    background-image: ${props => props.theme.image};
    background-size: 100% auto;
    height: 60vh;
    
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`

export default Wrapper
