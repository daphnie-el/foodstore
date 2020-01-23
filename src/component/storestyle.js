import styled from 'styled-components';


export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    border-right: 1px solid #e5e5e5;
    margin-top: 0;
`
export const Header = styled.h5`
    margin: 0;
    padding: 10px;
`
export const Input= styled.input`
    padding: 10px;
    height: 10px;
    border: none;
    width: 300px;
`
export const Wrapper= styled.div`
    width: 75%;
    border: 1px solid #e5e5e5;
    border-top: none;
    background-color: #e5e5e5;
` 
export const List= styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 90vh;
    overflow-y: scroll;
`
export const Product= styled.figcaption`
     line-height: 5px;
     font-family: sans-serif;
     font-weight: 500;
     font-size: 1em;
     padding-top: 5px;
     
     p {
        font-weight: 900;
        font-size: 0.8em;
        margin-bottom: 15px;
     }
`
export const App= styled.div`
      width: 100%;
      display: flex;
      flex-direction: row;
      margin-left: 0;
`
export const AppWrapper = styled.div `
  width: 100 % ;
  display: flex;
  flex-direction: row;
  margin-left: 0
`