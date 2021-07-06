import { configureStore } from '@reduxjs/toolkit';
import searchBar from '../features/searchBar/searchBarSlice'
import searchResults from '../features/searchResults/searchResultsSlice'
import { redditApi } from '../services/redditAPI';


export const store = configureStore({
  reducer: {
    searchBar: searchBar,
    searchResults: searchResults
  },
});
