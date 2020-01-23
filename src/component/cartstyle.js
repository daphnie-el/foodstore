import styled from 'styled-components';

export const Info = styled.div`
      margin-left: 1em;
      line-height: 1.5em;
    `
export const Wrapper = styled.div`
        padding: 1em;
        display: flex;
        border-bottom: 1px solid #e5e5e5;
    `
export const Paragraph = styled.p`
        background-color: #add8e6;
        padding: 10px;
        text-align: center;
        margin: 1em 2em;
    `

export const CartWrapper = styled.div`
      width: 25%;
      display: block;
      height: 100vh;
      position: relative;
    `

export const Checkout = styled.div`
       position: absolute;
       bottom: 0%;
       margin-left: 2em;
    `
export const Products = styled.div`
      overflow-y: scroll;
      height: 75%;
    `

export const Header = styled.h4`
    margin: 0;
    border-bottom: 2px solid #e5e5e5;
    text-align: center;
    padding: 10px;
`
export const Button = styled.button`
      padding: 10px;      
      font-size: 0.8em;      
      font-weight: 500;
      background-color: ${
        props => props.check ? 'green' : '#fff'
      };
      width: ${
        props => props.check ? '250px' : '115px'
      };
      color: ${
        props => props.cancel ? 'red' : '#3bb9ff'
      };
      border: ${
        props => props.cancel ? '1px solid red' : '1px solid #3bb9ff'
      };
      margin-right: ${
        props => props.cancel ? '0' : '20px'
      };
      
      &:hover {
        color: #fff;
        background-color: ${
        props => props.cancel ? 'red' : '#3bb9ff'
        }
      }

      &.check {
        color: white;
        border: 1px solid green;
        margin-bottom: 10px;

        &:hover{
          background-color: green;
        }
      }
    `
export const CartButton = styled.button`
      background-color: rgba(173, 216, 230, 0.5);
      border: 1px solid #3bb9ff;

      &:disabled {
          background-color: rgba(173, 216, 230, 0.1);
      }
      &.close {
        border: 0;
        background-color: transparent;
        margin-top: -1em;
        padding: 5px;
        font-size: 0.7em;
      }
    `
export const Cost = styled.span`
      font-weight: 900;
      font-size: 0.9em;
      margin-left: 2.5em;
`
