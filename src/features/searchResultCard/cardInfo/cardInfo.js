import styles from './cardInfo.module.css'
import redditLogo from '../../../images/redditLogo.png'

export const CardInfo = props => {

    return(
        <div className={styles.infoContainer}> 
            <div className={styles.subRedContainer}>
                <img src={redditLogo} className={styles.subRedIcon} />
                <p>r/{props.subreddit}</p>
            </div>
            <div className={styles.titleContainer}>
                <h2>{props.title}</h2>
            </div>
        </div>
    )
}

//TODO: turn the subreddit info into a link