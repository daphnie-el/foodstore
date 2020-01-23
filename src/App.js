import React from "react";
import { AppWrapper } from './component/storestyle'
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
    //index can either be 0 or -1
    let index = _items.findIndex(item => item.id === id)
    if (index > -1) {
      let count = _items[index].count;
      count++;
      _items[index].count = count;
      this.setState({cartItems : [..._items]})
    } else {
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

    }
  };
//method to increase and reduce the products
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
  };

  emptyCart = () => {
    this.setState({
      cartItems: []
    });
  }

  //method to find total price of cart items
  // findTotal = (x) => {
  //   const _items = this.state.cartItems;
  //   _items.reduce(x);
  // }
  //method to remove individual items from cart
  //react doesnt accept common array methods in its setstate method. ssplice pread operators are used instead to denote the former state then
removeFromCart= (id) => {
  const _items = this.state.cartItems
  const itemIndex = _items.findIndex((item) => item.id === id);
  _items.splice(itemIndex, 1);
  this.setState({
    cartItems: _items
  });
}


  render() {
    return (
      <AppWrapper>
        <Store addToCart={this.addToCart} />
        < Cart cartItems = {
          this.state.cartItems
        }
        increment = {
          this.increment
        }
        decrement = {
          this.decrement
        }
        emptyCart = {
          this.emptyCart
        }
        removeFromCart = {
          this.removeFromCart
        }
        // findTotal={this.findTotal}
        />
      </AppWrapper>
    );
  }
}
export default App;
