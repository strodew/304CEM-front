import React, { Component } from "react";
import axios from 'axios'

export default class DisplayItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: null //ensure that DisplayItems is empty
    }
  }

  async componentDidMount() {
    const listings = (await axios.get("http://localhost:8080/")).data;
    this.setState({
      listings //update state of DisplayItems
    })
  console.log('testing')
  console.log(this.state.listings)
  }
  render() {
    return (
      <div className='item_container'>
        {this.state.listings &&
          this.state.listings.map(item => (
            <div className='col-3 item'>
              <h1>Description: {item.description}</h1>
              <p>Location: {item.location}</p>
              <p>Condition: {item.condition}</p>
              <p>Price: £ {item.price}</p>
            </div>
          ))}
      </div>
    );
  }
}
