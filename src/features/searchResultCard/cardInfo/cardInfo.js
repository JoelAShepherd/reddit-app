import styles from './cardInfo.module.css'
import redditLogo from '../../../images/redditLogo.png'
import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux';
import { postThunk } from '../../post/postSlice';

export const CardInfo = props => {
    const dispatch = useDispatch();
    const postLink = props.link

    const handleClick = () => {
        dispatch(postThunk(postLink))
    }

    return(
        <div className={styles.infoContainer}> 
            <div className={styles.subRedContainer}>
                <img src={redditLogo} className={styles.subRedIcon} />
                <Link to={`/sub?name=${props.subreddit}`}>
                    <p>r/{props.subreddit}</p>
                </Link>
            </div>
            <div className={styles.titleContainer}>
                <Link to='/post' onClick={handleClick}>
                    <h2>{props.title}</h2>
                </Link>
            </div>
        </div>
    )
}

