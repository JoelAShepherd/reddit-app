import { createSlice } from '@reduxjs/toolkit'


//TODO: call fetchResults when state changes

export const searchBarSlice = createSlice({
    name: 'searchBar',
    initialState: {searchTerm: ''},
    reducers : {
        updateSearchTerm: (state, action) => {
            state.searchTerm = action.payload
        }
    }
})

export const { updateSearchTerm } = searchBarSlice.actions
export default searchBarSlice.reducer;