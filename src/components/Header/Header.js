import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  handleSearchSubmit(event) {
    event.preventDefault();
    console.log("search button clicked");
  }

  render() {
    return <div className="header" />;
  }
}
export default Header;
