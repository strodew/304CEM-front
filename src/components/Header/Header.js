import React, { Component } from "react";

class Header extends Component {
  handleSearchSubmit(event) {
    event.preventDefault();
    console.log("search button clicked");
  }

  render() {
    return (
      <div className="header">
        <p className='title'>Itemseller</p>
        <a href ='/login' className='login_button'>Log In</a>
      </div>
    ) 
  }
}
export default Header;
