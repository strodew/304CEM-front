import React, { Component } from "react";
import axios from 'axios'

export default class DisplayItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DisplayItems: null //ensure that DisplayItems is empty
    }
  }

  async componentDidMount() {
    const displayItems = (await axios.get("localhost:8080/displayItems")).data;
    this.setState({
      DisplayItems //update state of DisplayItems
    })
  }
  render() {
    return (
      <div className='item_box'>
        <div class='item'></div>
        <div class='item'></div>
        <div class='item'></div>
        <div class='item'></div>
        <div class='item'></div>
        <div class='item'></div>
        <div class='item'></div>
        <div class='item'></div>
        <div class='item'></div>
        <div class='item'></div>
        <div class='item'></div>
        <div class='item'></div>
        <div class='item'></div>
        <div class='item'></div>
        <div class='item'></div>
      </div>
    );
  }
}
