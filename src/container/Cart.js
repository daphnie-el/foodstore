import React, { Component } from "react";
import "./cart.css";
import Purchase from '../component/purchase';

// const Purchase = ({ cartItems }) => {
//   return (
//     <div> {
//     cartItems.map(cartItem => {
//     return (
//       <div className="">
//         <img src={cartItem.img} alt={cartItem.productName} width="100" />
//         <p>{cartItem.productPrice}</p>
//         <p>{cartItem.productName}</p>
//       </div>
//     )
//     })
//     };
//     </div>  
//   )
// };

class Cart extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="cart">
        <h1>Cart</h1>
        <div className="chechout">
          <Purchase 
          cartItems={this.props.cartItems} 
          increment={this.props.increment} 
          decrement={this.props.decrement} />
          <button id="check-btn">Checkout</button>
          <div>
            <button id="hold">Hold</button>
            <button id="cancel">Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
