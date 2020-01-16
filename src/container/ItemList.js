import React from "react";
import Item from "../component/Item";
import "../component/styles.css";
// import { products } from "../db.json";

const ItemList = ({ products, addToCart }) => {
  return (
    < div className = "list" > {
    products.map((product, id) => {
    return (
      <div>
        <Item
          key={id}
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
