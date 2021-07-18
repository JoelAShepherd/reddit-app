import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { reddit } from '../api/redditApi'




export const searchThunk =  createAsyncThunk(
    'searchResults/searchThunk',
    async (query) => {
        const searchTerm = await Promise.resolve(reddit.getSearch(query));
        return searchTerm;
    }
)


export const searchResultsSlice = createSlice({
    name: "searchResults",
    initialState: {searchResults: {},
        resultsLoading: false,
        resultsError: false,
        data: false
    },
    reducers: {},
    extraReducers: {
        [searchThunk.pending]: (state) => {
            state.resultsLoading = true;
            state.resultsError = false;
            state.data = false
        },
        [searchThunk.fulfilled]: (state, action) => {
            state.searchResults = action.payload;
            state.resultsLoading = false;
            state.resultsError = false;
            state.data = true
        },
        [searchThunk.rejected]: (state) => {
            state.resultsLoading = false;
            state.resultsError = true;
        }
    }

})


export const selectSearchResults = state => state.searchResults.searchResults;
export const selectSearchResultState = state => state.searchResults;
export default searchResultsSlice.reducer

/*

export const fetchResults = createAsyncThunk('searchResults/fetchResults',
    async (searchTerm) => {
        const formattedTerm = searchTerm.trim().replace(/\s/g, '%20')
        const response = await fetch(`https://www.reddit.com/search?q=${formattedTerm}`, 
        {
            method: "GET",
            headers: {"Content-type": "text/plain"}
          }).then(console.log(response.json))
        return response.json()
    }
)

[fetchResults.pending]: (state, action) => {
            state.resultsLoading = true;
            state.resultsError = false;
        },
        [fetchResults.fulfilled]: (state, action) => {
            state.searchResults = action.payload;
            state.resultsLoading = false;
            state.resultsError = false;
        },
        [fetchResults.rejected]: (state, action) => {
            state.resultsLoading = false;
            state.resultsError = true;
        },

*/