import { configureStore } from '@reduxjs/toolkit';
import searchBar from '../features/searchBar/searchBarSlice'


export const store = configureStore({
  reducer: {
    searchBar: searchBar
  },
});
