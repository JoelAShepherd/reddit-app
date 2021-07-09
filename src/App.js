import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { SearchBar } from './features/searchBar/searchBar';
import { SearchResults } from './features/searchResults/searchResults'
import { Navbar } from './features/navbar/navbar';

import './App.css';

function App() {

  return (
  <Router>
    <div className="App" data-testid="parent-div">
      <Navbar />    
      <SearchBar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/searchResults">
          <SearchResults />
        </Route>

      </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Homepage</h2>
    </div>
  )
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  )
}




export default App;
