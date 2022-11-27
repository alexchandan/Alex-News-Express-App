import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    const pageSize = 8;
    const apiKey = "681e3d20cc464b9e9cc5e5a0c6e8efc4"
    let country = 'in';
    // let category = 'sports';
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&pageSize=${pageSize}`
    return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<News key="general" url={url} pageSize={pageSize} country={country} category="general" />} />

          <Route exact path='/health' element={<News key="health" url={url} pageSize={pageSize} country={country} category="health" />} />

          <Route exact path='/business' element={<News key="business" url={url} pageSize={pageSize} country={country} category="business" />} />

          <Route exact path='/entertainment' element={<News key="entertainment" url={url} pageSize={pageSize} country={country} category="entertainment" />} />

          <Route exact path='/general' element={<News key="general" url={url} pageSize={pageSize} country={country} category="general" />} />

          <Route exact path='/science' element={<News key="science" url={url} pageSize={pageSize} country={country} category="science" />} />

          <Route exact path='/sports' element={<News key="sports" url={url} pageSize={pageSize} country={country} category="sports" />} />

          <Route exact path='/technology' element={<News key="technology" url={url} pageSize={pageSize} country={country} category="technology" />} />
        </Routes>
      </BrowserRouter>
    )
  }
}


