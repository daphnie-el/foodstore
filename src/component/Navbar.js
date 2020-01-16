import React, { Component } from "react";
import "./styles.css";
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
        <div className="navbar" style={{ borderRight: "1px solid #e5e5e5" }}>
          <button className="dropdown" onClick={this.displaySidebar}>
            &#9776;
          </button>
          <div clasName="sidebar">
            <FontAwesomeIcon className="fa" id="utensils" icon={faUtensils} />
            <FontAwesomeIcon className="fa" icon={faStar} />
            <FontAwesomeIcon className="fa" icon={faCog} />
          </div>
          <h5 id="header-text">Food Items</h5>
          {this.props.children}
        </div>
      );
    } else {
      return (
        <div className="navbar" style={{ borderRight: "1px solid #e5e5e5" }}>
          <button className="dropdown" onClick={this.displaySidebar}>
            &#9776;
          </button>
          <h5 id="header-text">Food Items</h5>
          {this.props.children}
        </div>
      );
    }
  }
}

export default Navbar;
