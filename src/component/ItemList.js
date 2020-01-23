import React from "react";
import { List, Product } from "./storestyle";
const Item = ({ id, name, price, imgUrl, addToCart }) => {
  return (
    <div style={{padding: '10px'}}>
      <img
        src={imgUrl}
        alt={name}
        width="180"
        height="150"
        onClick={() => addToCart(id, name, price, imgUrl)}
      />
      <Product>
        <li style={{listStyleType: 'square', color: 'green'}}>
          <span style={{ color: "#000" }}>{name}</span>
        </li>
        <p className="price">${price}</p>
      </Product>
    </div>
  );
};

const ItemList = ({ products, addToCart }) => {
  return (
    <List> {
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
  </List>
  )}

export default ItemList;
