import React, { Component } from "react";
import Navbar from "../component/Navbar";
import ItemList from "../component/ItemList";
import { Wrapper} from '../component/storestyle'
import { products } from "../db.json";
import Search from "../component/search";

class Store extends Component {
  constructor() {
    super();
    this.state = { searchInput: "", products: products };
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(event) {
    this.setState({
      searchInput: event.target.value
    });
  }

  render() {
    const { searchInput, products } = this.state;
    const searchResult = products.filter(product => {
      return product.name.toLowerCase().includes(searchInput.toLowerCase());
    });
    return (
      <Wrapper>
        <Navbar>
          <Search onSearchChange={this.onSearchChange} />
        </Navbar>
        <ItemList products={searchResult} addToCart={this.props.addToCart} />
      </Wrapper>
    );
  }
}
export default Store;
