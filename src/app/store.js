import { configureStore } from '@reduxjs/toolkit';
import searchBar from '../features/searchBar/searchBarSlice'
import searchResults from '../features/searchResults/searchResultsSlice'
import postCard from '../features/postCard/postCardSlice'



export const store = configureStore({
  reducer: {
    searchBar: searchBar,
    searchResults: searchResults,
    postCard: postCard
  },
});
