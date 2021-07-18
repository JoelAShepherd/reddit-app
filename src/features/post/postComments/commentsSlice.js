import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { reddit } from "../../api/redditApi"

const initialState = {
    commentsData: {},
    resultsLoading: false,
    resultsError: false,
    data: false
}

export const commentsThunk = createAsyncThunk(
    "comments/commentsThunk",
    async (postLink) => {
        const commentsData = await Promise.resolve(reddit.getComments(postLink));
        return commentsData
    }    
)

export const commentsSlice = createSlice({
    name: "comments",
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [commentsThunk.pending]: (state) => {
            state.resultsLoading = true;
            state.resultsError = false;
            state.data = false
        },
        [commentsThunk.fulfilled]: (state, action) => {
            state.commentsData = action.payload;
            state.resultsLoading = false;
            state.resultsError = false;
            state.data = true
        },
        [commentsThunk.rejected]: (state) => {
            state.resultsLoading = false;
            state.resultsError = true;
        }
    }
})

export const selectCommentsData = state => state.comments.commentsData
export const selectCommentsState = state => state.comments;
export default commentsSlice.reducer