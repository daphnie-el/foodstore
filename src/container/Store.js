import React, { Component } from "react";
import Navbar from "../component/Navbar";
import ItemList from "../component/ItemList";
import "../css/styles.css";
import { products } from "../db.json";
import Search from "../component/search";

class Store extends Component {
  constructor() {
    super();
    this.state = { searchInput: "", products: products };
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(event) {
    this.setState(state => ({
      searchInput: event.target.value
    }));
    console.log(event.target.value);
  }

  render() {
    const { searchInput, products } = this.state;
    const searchResult = products.filter(product => {
      return product.name.toLowerCase().includes(searchInput.toLowerCase());
    });
    return (
      <div className="store">
        <Navbar>
          <Search onChange={this.onSearchChange} />
        </Navbar>
        <ItemList products={searchResult} addToCart={this.props.addToCart} />
        {/* {this.props.children} */}
      </div>
    );
  }
}
export default Store;
