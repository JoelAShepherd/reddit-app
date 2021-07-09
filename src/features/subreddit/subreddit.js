import { useLocation } from "react-router"
import { useDispatch } from 'react-redux'
import { subredditThunk } from './subredditSlice';
import { SearchResults } from '../searchResults/searchResults';



function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

export const Subreddit = props => {
    
    let query = useQuery();

    const dispatch = useDispatch();

    dispatch(subredditThunk(query.get("name")))

    return(
        <div>
            <h2>This is a subreddit for {query.get("name")}</h2>
            <SearchResults type="sub" />
        </div>
    )
}