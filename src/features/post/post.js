import { useSelector } from 'react-redux';
import { selectPostData, selectPostState } from './postSlice';


export const Post = props => {
    
    
    const data = useSelector(selectPostData)
    const state = useSelector(selectPostState)

    const error = state.resultsError;
    const loading = state.resultsLoading;
    const has_data = state.data

    return(
        <div>
            <h3>Test</h3>
            {has_data ? 
            (<h2>{data.title}</h2>)
            : loading ? (<h3>Loading...</h3>) : error && (<h3>Hmmm.... an error occured</h3>)
            }
        </div>
    )
}

//TODO: clear unused state on navigating away