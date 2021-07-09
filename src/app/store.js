import { configureStore } from '@reduxjs/toolkit';
import searchBar from '../features/searchBar/searchBarSlice'
import searchResults from '../features/searchResults/searchResultsSlice'
import post from '../features/post/postSlice'
import homepage from '../features/homepage/homepageSlice';
import subreddit from '../features/subreddit/subredditSlice'




export const store = configureStore({
  reducer: {
    searchBar: searchBar,
    searchResults: searchResults,
    post: post,
    homepage: homepage,
    subreddit: subreddit
  },
});
