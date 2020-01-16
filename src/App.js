import React from "react";
import "./App.css";
import Store from "./container/Store";
import Cart from "./container/Cart";
//import cartItems from "./container/cartItems";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: []
    };
  }
  addToCart = (id, productName, productPrice, img) => {
    const _items = this.state.cartItems.slice();
    if (_items.findIndex((item) => item.id === id) !== -1) {
      return
    }
    _items.push({
      id,
      productName,
      productPrice,
      img,
      count: 1,
    });
    this.setState({
      cartItems: _items,
    });
  };

  increment = (id) => {
    // create a clone of the cartItems in state using slice()
    const _items = this.state.cartItems.slice();
    const itemIndex = _items.findIndex((item) => item.id === id);
    if (itemIndex === -1) {
      return;
    }

    // we have the item index, now get the item object
    const item = _items[itemIndex];
    // increment the item count
    item.count++;
    // replace the item
    _items.splice(itemIndex, 1, item);

    // update the state with fresh copy of cartItems
    this.setState({
      cartItems: _items
    });
  }

  decrement = (id) => {
    const _items = this.state.cartItems.slice();
    const itemIndex = _items.findIndex((item) => item.id === id);
    if (itemIndex === -1) {
      return;
    }
    const item = _items[itemIndex];
    if (item.count === 1) {
      _items.splice(itemIndex, 1);
    } else {
      item.count--;
      _items.splice(itemIndex, 1, item);
    }

    this.setState({
      cartItems: _items
    });
  }
  //react doesnt accept common array methods in its setstate method. spread operators are used instead to denote the former state then

  render() {
    console.log(this.state.cartItems);
    return (
      <div className="App">
        <Store addToCart={this.addToCart} />
        <Cart cartItems={this.state.cartItems} increment={this.increment} decrement={this.decrement} />
      </div>
    );
  }
}
export default App;
