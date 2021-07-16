import { useSelector } from 'react-redux';
import { selectPostData, selectPostState } from './postSlice';
import { PostContent } from './postContent/postContent';
import { PostComments } from './postComments/postComments';
import { decode } from '../../tools/decode'
import styles from './post.module.css'
import redditLogo from '../../images/redditLogo.png';


export const Post = props => {
    
    const data = useSelector(selectPostData)
    const state = useSelector(selectPostState)

    const error = state.resultsError;
    const loading = state.resultsLoading;
    const has_data = state.data

    return(
        <div>
            {has_data ? 
            (<div>
                <div className={styles.authorContainer}>
                    <img src={redditLogo} alt="" className={styles.redditLogo}/>
                    <h4 className={styles.authorName}>{data.author}</h4>
                </div>
                <h2 className={styles.postTitle}>{decode(data.title)}</h2>
                <PostContent />
                <PostComments />
            </div>
                )
            : loading ? (<h3>Loading...</h3>) : error && (<h3>Hmmm.... an error occured</h3>)
            }
        </div>
    )
}

//TODO: clear unused state on navigating away