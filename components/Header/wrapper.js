import styled from 'styled-components'

const Wrapper = styled.div`
 .header-media {
    display: flex;
    flex-direction: inverse-column;

    align-items: flex-end;
    background-image: url("/static/images/ai.jpg");
    height: ${props => props.theme.size};
    
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;    
  }
  
  .branding {
    font-family: "Libre Franklin","Helvetica Neue",helvetica,arial,sans-serif; 
    margin: 2ch;
    
    h1 {
      margin: 0
    }

   .branding-text {
      font-size: 3ch;
      font-weight: 800;
      letter-spacing: .08em;
      text-transform: uppercase;
      text-decoration: none;
      color: white;
      :visited { 
        color: white;
      }
    }

    .branding-description {
      color: white;
      margin: 0;
    }    
  }
`

export default Wrapper
