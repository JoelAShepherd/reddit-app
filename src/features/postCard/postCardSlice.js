import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { reddit } from '../api/redditApi'


const initialState = {
    cardData: {},
    resultsLoading: false,
    resultsError: false,
    data: false
}


export const postCardSlice = createSlice({
    name: "postCard",
    initialState: initialState,
    reducers: {
        resetCard: (state) => {
            state = initialState
        }
    },
    extraReducers: {}
})


export const { resetCard } = postCardSlice.actions
export default postCardSlice.reducer
