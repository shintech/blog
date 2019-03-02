import styled from 'styled-components'

const Wrapper = styled.div`
  color: white;
  margin: 2ch 5ch 0 5ch;
  min-width: 30ch;

  .heading {
    margin: 0;
    font-size: 3ch;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: .09em;
    white-space: nowrap;
  }

  hr {
    color: teal;
  }
  
  .flex ul {
    padding: 0;
    border: 1px solid black;
    background-color: darkslategrey;
    border-radius: 1ch;
    min-width: 30ch;
  }

  .flex li {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 1ch;
  }

  .flex li label {
    flex: 1 0 12ch;
    max-width: 16ch;
    text-transform: uppercase;
    letter-spacing: .09em;
  }

  .flex li label + * {
    flex 1 0 12ch;
  }

  .flex li.button-group {
    float: right;
  }

  .flex input, textarea {
    padding: 1ch;
    font-size: 2ch;
    border-radius: 1ch;
  }

  .flex textarea {
    height: 50vh;
  }

  .flex li button {
    padding: 1.5ch 3ch;
    border: none;
    color: #f2f2f2;
    text-transform: uppercase;
    letter-spacing: .09em;
    border-radius: 1ch;

    :hover {
      cursor: pointer;
      background-color: dimgrey;
    }
  }

  .flex li {
    .submit {
      margin-top: 1ch;
      background-color: teal;
    }
  }
`

export default Wrapper
