import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchResults = createAsyncThunk('searchResults/fetchResults',
    async (searchTerm) => {
        const formattedTerm = searchTerm.trim().replace(/\s/g, '%20')
        const response = await fetch(`https://www.reddit.com/search?q=${formattedTerm}`)
        return response.json()
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
        }        
    }

})



export default searchResultsSlice.reducer

