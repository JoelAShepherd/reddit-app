import { useDispatch, useSelector } from 'react-redux';
import { postThunk, selectPostData, selectPostState } from './postSlice';


export const PostCard = props => {
    
    const dispatch = useDispatch()
    dispatch(postThunk(link))
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