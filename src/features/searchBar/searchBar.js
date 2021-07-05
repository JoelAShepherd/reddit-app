import { useState } from 'react'

export const SearchBar = (props) => {
const { searchTerm, setSearchTerm} = useState();


return (
    <div>
        <input type="text"></input>
    </div>
)
}