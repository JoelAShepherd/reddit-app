import React from 'react';
import { SearchBar } from './features/searchBar/searchBar';
import { SearchResults } from './features/searchResults/searchResults'
import { Navbar } from './features/navbar/navbar';

import './App.css';

function App() {
  return (
    <div className="App" data-testid="parent-div">
    <Navbar />    
    <SearchBar />
    <SearchResults />
    </div>
  );
}

export default App;
