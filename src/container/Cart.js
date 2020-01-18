import React from "react";
import "../css/cart.css";
import Purchase from '../component/purchase';


function Cart({ cartItems, increment, decrement, emptyCart, removeFromCart }) {
    
    return (
      <div className="cart">
        <h1>Cart</h1>      
        <div className="cart-products">
          <Purchase 
          cartItems={ cartItems } 
          increment={ increment } 
          decrement={ decrement }
          removeFromCart = { removeFromCart }
          />
        </div>
        <div className="checkout">
          <button id = "check-btn" > Checkout </button>          
          <div>
            <button id="hold">Hold</button>
            <button id="cancel"  onClick={emptyCart} >Cancel</button>
          </div>
        </div>        
      </div>
    );  
}

export default Cart;
