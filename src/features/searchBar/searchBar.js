import { useState } from 'react'
import { updateSearchTerm } from './searchBarSlice';
import { useDispatch } from 'react-redux'

export const SearchBar = () => {
const [searchTerm, setSearchTerm] = useState('');
const dispatch = useDispatch();


const handleChange = (e) => {
    setSearchTerm(e.target.value)
    
}

const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateSearchTerm(searchTerm))

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