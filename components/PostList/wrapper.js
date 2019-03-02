import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  .post-list {
    border-right: 1px dotted black;
    min-width: 75vh;
    padding-right: 10vh;
  }

  a:hover {
    text-decoration: underline;
  }
  
  .post-link-created {
    font-family: "Libre Franklin","Helvetica Neue",helvetica,arial,sans-serif;    
    letter-spacing: .1818em;
    text-transform: uppercase;
  }
  
  .post-author {
    font-family: "Libre Franklin","Helvetica Neue",helvetica,arial,sans-serif;    
    text-transform: uppercase;   
    color: white;
  }
  
  .post-title {
    font-family: "Libre Franklin","Helvetica Neue",helvetica,arial,sans-serif;    
    color: white;    
    font-size: 3ch;
  }
  
  .post-description {
    font-family: "Libre Franklin","Helvetica Neue",helvetica,arial,sans-serif;    
    color: white;
  }
  
  .sidebar {
    position: -webkit-sticky;
    position: sticky;
    top: 14vh;
    min-width: 25vh;
}
  
`

export default Wrapper
