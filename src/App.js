import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { SearchBar } from './features/searchBar/searchBar';
import { SearchResults } from './features/searchResults/searchResults'
import { Navbar } from './features/navbar/navbar';
import { Homepage } from './features/homepage/homepage';

import './App.css';

function App() {

  return (
  <Router>
    <div className="App" data-testid="parent-div">
      <Navbar />    
      <SearchBar />

      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/searchResults">
          <SearchResults type="search"/>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  )
}




export default App;
