import styles from './ratings.module.css'

export const Ratings = (props) => {

    return(
        <div className={styles.srRatingContainer}>
                        <i className="Fas Fa-Chevron-Circle-Up"/>
                        <p className={styles.rating}>{props.rating}</p>
                        <i className="Fas Fa-Chevron-Circle-Down"/>
        </div>
    )
}