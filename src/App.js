import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';

export default class App extends Component {
  render() {
    return (
      // c37e2ef951bf4f0caf7edba576d573eb
      <div>
        <NavBar />
        <News />
      </div>
    )
  }
}


