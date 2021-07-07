import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



const reddit = {async getSearch(query) {
    try {
        const response = await fetch(`https://www.reddit.com/search.json?q=${query}&limit=6`)
        if (response.ok) {
            const jsonResponse = await response.json();
            const children = jsonResponse.data.children.map(child => child.data)
            return children;
        }
        throw new Error('Reuqest Failed');
    } catch(error) {
        console.log(error)
    }
}}

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
        resultsError: false
    },
    reducers: {},
    extraReducers: {
        [searchThunk.pending]: (state, action) => {
            state.resultsLoading = true;
            state.resultsError = false;
        },
        [searchThunk.fulfilled]: (state, action) => {
            state.searchResults = action.payload;
            state.resultsLoading = false;
            state.resultsError = false;
        },
        [searchThunk.rejected]: (state, action) => {
            state.resultsLoading = false;
            state.resultsError = true;
        }
    }

})


export const { searchResultsSelector } = state => state.searchResults.searchResults;
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