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
            <p>post card</p>
        </div>
    )
}