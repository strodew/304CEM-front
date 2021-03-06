import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import axios from "axios";

export default class SlideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTxt: ""
    };
  }

  updateSearchTxt(value) {
    this.setState({
      searchTxt: value
    });
  }

  async submit() {
    var data = {
      searchTxt: this.state.searchTxt
    };
    const formData = new formData();
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    await axios.post("localhost:8080/items", formData, config);
  }

  render() {
    return (
      <Menu>
        <form>
          <div className="row">
            <input
              type="text"
              name="searchBar"
              onBlur={e => {
                this.updateSearchTxt(e.target.value);
              }}
            />
            <button
              type="submit"
              onclick={() => {
                this.submit();
              }}
            >
              Search
            </button>
          </div>
        </form>
      </Menu>
    );
  }
}
