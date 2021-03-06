import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { SearchBar } from './features/searchBar/searchBar';
import { SearchResults } from './features/searchResults/searchResults'
import { Navbar } from './features/navbar/navbar';
import { Homepage } from './features/homepage/homepage';
import { Subreddit } from './features/subreddit/subreddit';
import { Post } from './features/post/post'
import {Footer} from './features/footer/footer'

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
          <Route path="/searchResults">
            <SearchResults type="search"/>
          </Route>
          <Route path="/sub">
            <Subreddit />
          </Route>
          <Route path="/post">
            <Post />
          </Route>

        </Switch>

        <Footer />
      </div>
    </Router>
  );
}






export default App;
