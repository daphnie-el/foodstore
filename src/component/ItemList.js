import React from "react";
import "../css/styles.css";
// import cartItem from '../container/cartItems';
const Item = ({ id, name, price, imgUrl, addToCart }) => {
  return (
    <figure className="card">
      <img
        src={imgUrl}
        alt={name}
        width="180"
        height="150"
        onClick={() => addToCart(id, name, price, imgUrl)}
      />
      <figcaption className="product">
        <li id="name">
          <span style={{ color: "#000" }}>{name}</span>
        </li>
        <p id="price">${price}</p>
      </figcaption>
    </figure>
  );
};

const ItemList = ({ products, addToCart }) => {
  return (
    < div className = "list" > {
    products.map((product, id) => {
    return (
      <div key={id}>
        <Item          
          id={product.id}
          name={product.name}
          price={product.price}
          imgUrl={product.imgUrl}
          addToCart={addToCart}
        />
      </div>
    );
  })
    }
  </div>
  )}

export default ItemList;
