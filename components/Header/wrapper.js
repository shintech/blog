import styled from 'styled-components'

const Wrapper = styled.div`
  .header-media {
    height: ${props => props.theme.size};
    
    position: relative;
    color: ghostwhite;
    padding: 1ch 0 0 1ch;
    background-image: url("/static/images/ai.jpg");
    
    background-attachment: fixed;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;

    svg {
      height: 5ch;
      width: 5ch;
      margin: 0 2ch 2.5ch auto;
      overflow: hidden;
      position: sticky;
      position: -webkit-sticky;
      top: 1ch; /* required */  
    }    
  }
  
  .branding {
    font-family: "Libre Franklin","Helvetica Neue",helvetica,arial,sans-serif; 
    left: 0;
    bottom: 0;
    position: absolute;
    margin: 0 1ch 0 1ch;

    h1 {
      margin: 0 0 0.5ch 0;
    }

  .branding-text {
    text-decoration: none;
    color: ghostwhite;
    text-transform: uppercase;
    text-shadow: 2px 2px #ff0000;  
    font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif; 
    letter-spacing: 0.1ch;
    line-height: 2ch;
      :visited { 
        color: white;
      }
    }

    .branding-description {
      letter-spacing: 0.9ch;
      margin-left: 0.5ch;
      font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
      line-height: 1.5ch;
    }    
  }
`

export default Wrapper
