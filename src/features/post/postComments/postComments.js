import { useSelector } from "react-redux"
import { selectCommentsData, selectCommentsState } from '../postComments/commentsSlice';
import { Comment } from './comment/comment'

export const PostComments = () => {
    const data = useSelector(selectCommentsData)
    const state = useSelector(selectCommentsState)

    const error = state.resultsError;
    const loading = state.resultsLoading;
    const hasData = state.data;

    
    return (
        <div>
            <p>Post comments go here</p>
            {console.log(data)}
            {loading ? <h3>Loading...</h3> 
            : hasData && data.map((comment, index) => 
            <Comment key={index} body={comment.body} data={comment} depth={0}/>
            )}
        </div>
    )
}

/*

{data.children.data.map((comment, index) => 
            <Comment key={index} body={comment.body} replies={comment.replies} />
            )}


*/