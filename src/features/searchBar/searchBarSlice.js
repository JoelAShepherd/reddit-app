import { createSlice } from '@reduxjs/toolkit'

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