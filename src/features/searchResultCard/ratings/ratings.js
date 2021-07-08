import styles from './ratings.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'


export const Ratings = (props) => {

    let thisRating = props.rating;

    if (thisRating > 999) {
        thisRating = (thisRating/1000).toFixed(1)
        thisRating = `${thisRating}k`
    }

    return(
        <div className={styles.srRatingContainer}>
            <div>
                <FontAwesomeIcon icon={faAngleUp} />
            </div>
            <p className={styles.rating}>{thisRating}</p>
            <div>
                <FontAwesomeIcon icon={faAngleDown} />
            </div>
        </div>
    )
}