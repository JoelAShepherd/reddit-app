import styles from './cardInfo.module.css'
import { Link } from 'react-router-dom'
import { decode } from '../../../tools/decode'

import { useDispatch } from 'react-redux';
import { postThunk } from '../../post/postSlice';
import { commentsThunk } from '../../post/postComments/commentsSlice';

export const CardInfo = props => {
    const dispatch = useDispatch();
    const postLink = props.link

    const handleClick = () => {
        dispatch(postThunk(postLink))
        dispatch(commentsThunk(postLink))
    }

    const title = decode(props.title)

    return(
        <div className={styles.infoContainer}> 
            <div className={styles.titleContainer}>
                <Link to='/post' onClick={handleClick}>
                    <h2>{title}</h2>
                </Link>
            </div>
        </div>
    )
}

//TODO reduce the getting of post data into a single action, differentiate the ino
//from it further down stream