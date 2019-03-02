import styled from 'styled-components'

const Wrapper = styled.div`
  font-family: "Libre Franklin","Helvetica Neue",helvetica,arial,sans-serif;
  color: white;
  min-height: 50vh;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  .header {
    padding-left: 8ch;
    margin-top: auto;
    margin-bottom: auto;
    font-size: .875rem;
    font-weight: 800;
    letter-spacing: .14em;
    text-transform: uppercase;
 }

  .content {
    padding-right: 5ch;
    margin-top: auto;
    margin-bottom: auto;  
    line-height: 1.5;
  }
`

export default Wrapper
