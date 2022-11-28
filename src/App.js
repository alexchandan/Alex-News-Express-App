import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    const pageSize = 6;
    const apiKey = "2f37214f41cc4da8ab2fbb84ca2e748f"
    let country = 'in';
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&pageSize=${pageSize}`
    return (
      <BrowserRouter>
        <NavBar />
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
        />
        <Routes>
          <Route exact path='/' element={<News setProgress={this.setProgress} key="general" url={url} pageSize={pageSize} country={country} category="general" />} />

          <Route exact path='/health' element={<News setProgress={this.setProgress} key="health" url={url} pageSize={pageSize} country={country} category="health" />} />

          <Route exact path='/business' element={<News setProgress={this.setProgress} key="business" url={url} pageSize={pageSize} country={country} category="business" />} />

          <Route exact path='/entertainment' element={<News setProgress={this.setProgress} key="entertainment" url={url} pageSize={pageSize} country={country} category="entertainment" />} />

          <Route exact path='/general' element={<News setProgress={this.setProgress} key="general" url={url} pageSize={pageSize} country={country} category="general" />} />

          <Route exact path='/science' element={<News setProgress={this.setProgress} key="science" url={url} pageSize={pageSize} country={country} category="science" />} />

          <Route exact path='/sports' element={<News setProgress={this.setProgress} key="sports" url={url} pageSize={pageSize} country={country} category="sports" />} />

          <Route exact path='/technology' element={<News setProgress={this.setProgress} key="technology" url={url} pageSize={pageSize} country={country} category="technology" />} />
        </Routes>
      </BrowserRouter>
    )
  }
}


