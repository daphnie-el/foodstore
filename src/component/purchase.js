import React from 'react';
import { CartButton, Cost, Info, Paragraph, Wrapper } from './cartstyle.js';

function Purchase ({ increment, decrement, cartItems, removeFromCart }) {
    function price (a, b) {
        return a * b
    };

    let total = 0;
    for (const item of cartItems) {
        total += price(item.productPrice, item.count);
    }
    
    return (
        <div>
            {cartItems.map((cartItem, id) => {
                return (                
                    <Wrapper key={id}>
                        <img src={cartItem.img} alt={cartItem.productName} width="75" />
                        <Info>
                            <div style={{display:"flex", justifyContent: 'space-between'}}>
                                <span>
                                    {cartItem.productName}
                                </span>
                                <CartButton onClick={() => removeFromCart(cartItem.id)} title="close" className="close">
                                &times;
                                </CartButton>
                            </div>                        
                            <CartButton onClick={() => decrement(cartItem.id)}> - </CartButton>
                            <CartButton disabled>{cartItem.count}</CartButton>                        
                            <CartButton onClick={() => increment(cartItem.id)}> + </CartButton>
                            <Cost id="product-price">${price(cartItem.productPrice, cartItem.count)}</Cost>
                        </Info>
                    </Wrapper>
                )})
            }
                <Paragraph>Item Total:${total} </Paragraph>
        </div>  
    )    
}

export default Purchase;