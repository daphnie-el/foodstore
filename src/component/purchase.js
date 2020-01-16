import React from 'react';
import '../container/cart.css';

const Purchase = ({ increment, decrement, cartItems }) => {

        return (
        <div>
        {cartItems.map(cartItem => {
            return (
                <div className="purchase">
                    <img src={cartItem.img} alt={cartItem.productName} width="100" />
                    <p>{cartItem.productPrice}</p>
                    <p>{cartItem.productName}</p>
                    <p>{cartItem.count}</p>
                    <button onClick={() => increment(cartItem.id)}> + </button>
                    <button onClick={() => decrement(cartItem.id)}> - </button>
                </div>
            )})
        }
        <p>Items in cart: { cartItems.length }</p>
        </div>  
    )    
}

export default Purchase;