import React, { Component } from "react";
import { Nav, Header } from "./storestyle";
import "../css/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faCog } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      visibility: false
    };
    this.displaySidebar = this.displaySidebar.bind(this);
  }

  displaySidebar() {
    this.setState(state => ({
      visibility: !state.visibility
    }));
  }

  render() {
    if (this.state.visibility) {
      return (
        <Nav>
          <button className="dropdown" onClick={this.displaySidebar}>
            &#9776;
          </button>
          <div clasName="sidebar">
            <FontAwesomeIcon className="fa" id="utensils" icon={faUtensils} />
            <FontAwesomeIcon className="fa" icon={faStar} />
            <FontAwesomeIcon className="fa" icon={faCog} />
          </div>
          <Header>Food Items</Header>
          {this.props.children}
        </Nav>
      );
    } else {
      return (
        <Nav>
          <button className="dropdown" onClick={this.displaySidebar}>
            &#9776;
          </button>
          <Header>Food Items</Header>
          {this.props.children}
        </Nav>
      );
    }
  }
}

export default Navbar;
