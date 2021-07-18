import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { reddit } from '../api/redditApi'


const initialState = {
    postData: {},
    resultsLoading: false,
    resultsError: false,
    data: false
}

export const postThunk = createAsyncThunk(
    "post/postThunk",
    async (postLink) => {
        const postData = await Promise.resolve(reddit.getPost(postLink));
        return postData
    }
)


export const postSlice = createSlice({
    name: "post",
    initialState: initialState,
    reducers: {
        resetPost: (state) => {
            state = initialState
        }
    },
    extraReducers: {
        [postThunk.pending]: (state) => {
            state.resultsLoading = true;
            state.resultsError = false;
            state.data = false
        },
        [postThunk.fulfilled]: (state, action) => {
            state.postData = action.payload;
            state.resultsLoading = false;
            state.resultsError = false;
            state.data = true
        },
        [postThunk.rejected]: (state) => {
            state.resultsLoading = false;
            state.resultsError = true;
        }
    }
})


export const { resetPost } = postSlice.actions
export const selectPostData = state => state.post.postData[0];
export const selectPostState = state => state.post;
export default postSlice.reducer
