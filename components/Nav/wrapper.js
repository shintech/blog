import styled from 'styled-components'

const Wrapper = styled.nav`
  overflow: hidden;
  font-family: "Libre Franklin","Helvetica Neue",helvetica,arial,sans-serif;

  position: sticky;
  position: -webkit-sticky;
  top: 0;

  border-bottom: 1px solid black;
  background-color: #222222;

  ul {
    padding: 0;
  }
  
  a.nav-link {
    color: ${props => props.theme.text};
    background-color: #222222;
    text-align: center;
    padding: 1.25ch;
    text-decoration: none;
    font-size: 2.5ch;


    &.active {
      background-color: ${props => props.theme.active};
      color: ${props => props.theme.activeText};

      &:hover{
        background-color: ${props => props.theme.activeHover};
        color: ${props => props.theme.activeHoverText};
        cursor: not-allowed;
      }
    }

    :hover {
      background-color: ${props => props.theme.hover};
      color: ${props => props.theme.hoverText};
    }
  }
  

  @media (max-width: 800px) {
    grid-row: 1;
    grid-column: span 3;
    flex-direction: row;
    border-radius: 1ch;
    align-items: center;

    a {
      border-radius: 0;
      border: none;

      :first-child {
        border-radius: 1ch 0 0 1ch;
      }

      &:not(:first-child) {display: none;}
      &.icon {
        margin-left: auto;
        display: block;
      }
    }

    svg.logo {
      display: none;
    }
    
    &.responsive {
      flex-direction: column;
      position: relative;

      .icon {
        position: absolute;
        right: 0;
        top: 0;
      }      
      
      a {
        display: block;
        
        margin-left: 3.5ch;
        
        :last-child {
          border-radius: 0 1ch 1ch 0;
        }
        
        :not(:last-child) {
          width: 100%;
          text-align: left;
        }
      }
    }
  }
`

export default Wrapper
