import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
import SlideBar from './components/SlideBar/SlideBar'
import Header from './components/Header/Header'
import DisplayItems from './components/DisplayItems/DisplayItems'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <SlideBar/>
        <DisplayItems/>
      </div>        
    );
  }
}
export default App;
