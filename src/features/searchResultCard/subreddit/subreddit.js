import styles from './subreddit.module.css'
import { Link } from 'react-router-dom'
import redditLogo from '../../../images/redditLogo.png';

export const Subreddit = (props) => {

    return(
        <div className={styles.subRedContainer}>
            <img src={redditLogo} className={styles.subRedIcon} />
            <Link to={`/sub?name=${props.subreddit}`}>
                <p>r/{props.subreddit}</p>
            </Link>
        </div>
    )
}