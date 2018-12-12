import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
import SlideBar from './components/SlideBar/SlideBar'
import Header from './components/Header/Header'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <SlideBar/>
      </div>        
    );
  }
}
export default App;
