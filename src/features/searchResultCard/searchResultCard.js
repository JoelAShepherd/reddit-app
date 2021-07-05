import styles from './searchResultCard.module.css';

export const SearchResultCard = (props) => {

    return (
        <div className={styles.srContainer}>
            <h2 className={styles.title}>{props.title}</h2>
            <div className={styles.srContentOuterContainer}>
                <div className={styles.srContentContainer}>
                    <div className={styles.srRatingContainer}>
                        <i className="Fas Fa-Chevron-Circle-Up"/>
                        <p className={styles.rating}>{props.rating}</p>
                        <i className="Fas Fa-Chevron-Circle-Down"/>
                    </div>
                    <img class={styles.cardImage} src={props.src}/>
                </div>
            </div>
        </div>
    )
}