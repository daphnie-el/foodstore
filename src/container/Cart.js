import React from "react";
import {Button, CartWrapper, Checkout, Header, Products, } from "../component/cartstyle";
import Purchase from '../component/purchase';

function Cart({ cartItems, increment, decrement, emptyCart, removeFromCart }) {
              
    return (
      <CartWrapper>
        <Header>Cart</Header>      
        <Products>
          <Purchase 
          cartItems={ cartItems } 
          increment={ increment } 
          decrement={ decrement }
          removeFromCart = { removeFromCart }
          />
        </Products>
        <Checkout>
          <Button className="check" check> Checkout </Button>          
          <br/>        
            <Button>Hold</Button>
            <Button cancel  onClick={emptyCart}>Cancel</Button>           
        </Checkout>        
      </CartWrapper>
    );  
}

export default Cart;
