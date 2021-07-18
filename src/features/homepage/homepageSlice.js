import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { reddit } from '../api/redditApi'

export const homepageLoadThunk = createAsyncThunk(
    "homepage/homepageLoadThunk",
    async () => {
        const data = await Promise.resolve(reddit.getHomepage())
        return data;
    }
)

export const homepageSlice = createSlice({
    name: "homepage",
    initialState: { 
        homepageResults: {},
        resultsLoading: false,
        resultsError: false,
        data: false
    }, 
    reducers: {},
    extraReducers: {
        [homepageLoadThunk.pending]: (state) => {
            state.resultsLoading = true;
            state.resultsError = false;
            state.data = false;
        },
        [homepageLoadThunk.fulfilled]: (state, action) => {
            state.homepageResults = action.payload;
            state.resultsLoading = false;
            state.resultsError = false;
            state.data = true
        },
        [homepageLoadThunk.rejected]: (state) => {
            state.resultsLoading = false;
            state.resultsError = true;
        }
    }
})

export const selectHomepageData = state => state.homepage.homepageResults
export const selectHomepageState = state => state.homepage
export default homepageSlice.reducer