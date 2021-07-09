import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router';

import { updateSearchTerm } from './searchBarSlice';
import { searchThunk } from '../searchResults/searchResultsSlice'




export const SearchBar = () => {
const [searchTerm, setSearchTerm] = useState('');
const dispatch = useDispatch();
const history = useHistory();

const handleChange = (e) => {
    setSearchTerm(e.target.value)
    
}

const handleSubmit = (e) => {
    
    e.preventDefault();
    history.push('/searchResults')
    dispatch(updateSearchTerm(searchTerm))
    dispatch(searchThunk(searchTerm))

    setSearchTerm('')
}


return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text"
                value={searchTerm}
                onChange={handleChange}
            ></input>
            <button type="submit">Search</button>
        </form>
    </div>
)
}