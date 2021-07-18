import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { reddit } from '../api/redditApi'



export const subredditThunk = createAsyncThunk(
    "subreddit/subredditThunk",
    async (sub) => {
        const subredditData = await Promise.resolve(reddit.getSubreddit(sub));
        return subredditData;
    }
)


const initialState = {
    subredditData: {},
    resultsLoading: false,
    resultsError: false,
    data: false
}

export const subredditSlice = createSlice({
    name: "subreddit",
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [subredditThunk.pending]: (state) => {
            state.resultsLoading = true;
            state.resultsError = false;
            state.data = false
        },
        [subredditThunk.fulfilled]: (state, action) => {
            state.subredditData = action.payload;
            state.resultsLoading = false;
            state.resultsError = false;
            state.data = true
        },
        [subredditThunk.rejected]: (state) => {
            state.resultsLoading = false;
            state.resultsError = true;
        }
    }
})


export const selectSubredditData = state => state.subreddit.subredditData;
export const selectSubredditState = state => state.subreddit;
export default subredditSlice.reducer;