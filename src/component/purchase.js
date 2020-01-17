import React from 'react';
import '../css/cart.css';

const Purchase = ({ increment, decrement, cartItems }) => {

    return (
        <div>
        {cartItems.map(cartItem => {
            return (
                <div className="purchase">
                    <img src={cartItem.img} alt={cartItem.productName} width="75" />
                    <div className="purchase-info">
                        <li id="name">
                            <span style={{ color: "#000" }}>
                                {cartItem.productName}
                            </span>
                        </li>
                        <button onClick={() => decrement(cartItem.id)}> - </button>
                        <button disabled>{cartItem.count}</button>                        
                        <button onClick={() => increment(cartItem.id)}> + </button>
                        <span id="product-price">${cartItem.productPrice}</span>
                    </div>
                </div>
            )})
        }
        <p className="total">Items Total: { cartItems.length }</p>
        </div>  
    )    
}

export default Purchase;