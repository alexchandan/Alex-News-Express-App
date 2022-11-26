import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';

export default class App extends Component {
  render() {
    const pageSize = 15;
    const apiKey = "c37e2ef951bf4f0caf7edba576d573eb"
    return (
      <div>
        <NavBar />
        <News url={`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&pageSize=${pageSize}`} pageSize={pageSize} />
      </div>
    )
  }
}


