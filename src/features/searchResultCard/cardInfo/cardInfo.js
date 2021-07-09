import styles from './cardInfo.module.css'
import redditLogo from '../../../images/redditLogo.png'
import { Link } from 'react-router-dom'

export const CardInfo = props => {

    return(
        <div className={styles.infoContainer}> 
            <div className={styles.subRedContainer}>
                <img src={redditLogo} className={styles.subRedIcon} />
                <Link to={`/sub?name=${props.subreddit}`}>
                    <p>r/{props.subreddit}</p>
                </Link>
            </div>
            <div className={styles.titleContainer}>
                <h2>{props.title}</h2>
            </div>
        </div>
    )
}

