import React from "react";
import "./styles.css";
// import cartItem from '../container/cartItems';
const Item = ({ id, name, price, imgUrl, addToCart }) => {
  return (
    <figure className="card">
      <img
        src={imgUrl}
        alt={name}
        width="200"
        height="150"
        onClick={() => addToCart(id, name, price, imgUrl)}
      />
      <figcaption className="product">
        <li id="name">
          <span style={{ color: "#000" }}>{name}</span>
        </li>
        <p id="price">{price}</p>
      </figcaption>
    </figure>
  );
};

export default Item;
