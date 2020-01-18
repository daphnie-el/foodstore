import React from 'react';
import '../css/cart.css';

function Purchase ({ increment, decrement, cartItems, removeFromCart }) {
        function price (a, b) {
            return a * b
        };
        
    return (
        <div>
        {cartItems.map((cartItem, id) => {
            return (                
                <div className="purchase" key={id}>
                    <img src={cartItem.img} alt={cartItem.productName} width="75" />
                    <div className="purchase-info">
                        < li className="name" >
                            <span style={{ color: "#000" }}>
                                {cartItem.productName}
                            </span>
                        <button onClick={() => removeFromCart(cartItem.id)}>&times;</button>
                        </li>
                        <button onClick={() => decrement(cartItem.id)}> - </button>
                        <button disabled>{cartItem.count}</button>                        
                        <button onClick={() => increment(cartItem.id)}> + </button>
                        <span id="product-price">${price(cartItem.productPrice, cartItem.count)}</span>
                    </div>
                </div>
            )})
        }
        <p className="total">Items Total: </p>
        </div>  
    )    
}

export default Purchase;