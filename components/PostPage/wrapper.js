import styled from 'styled-components'

const Wrapper = styled.div`
color: white;
margin: 2ch;

h1 {
  margin: 0;
}

.post-created {
  font-family: "Libre Franklin","Helvetica Neue",helvetica,arial,sans-serif;    
  letter-spacing: .1818em;
  text-transform: uppercase;  
}

.post-author {
  font-family: "Libre Franklin","Helvetica Neue",helvetica,arial,sans-serif;    
  text-transform: uppercase;   
  color: white;
}

.post-description {
  margin-top: 1ch;
}

code {
  padding-left: 2ch;
  margin-right: 25%;
}
`

export default Wrapper
