import { useDispatch } from 'react-redux'
import { homepageLoadThunk } from './homepageSlice';
import { SearchResults } from '../searchResults/searchResults';

export const Homepage = (props) => {
    const dispatch = useDispatch();

    dispatch(homepageLoadThunk());

    return (
        <div>
            <h2>Homepage</h2>
            <SearchResults type="home" />
        </div>
    )
}