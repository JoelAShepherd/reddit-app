import styles from './searchResultCard.module.css';

export const SearchResultCard = (props) => {

    const data = props.card_data

    let is_gif;
    try {if(data.preview.reddit_video_preview.is_gif) {
        is_gif = true
    } }
    catch {
        is_gif=false
    }

    
    const { title } = data
    const rating = data.ups
    const src = data.is_video ? data.thumbnail : is_gif ? 
                data.preview.images[0].variants.gif.source.url : data.url;

    return (
        <div className={styles.srContainer}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.srContentOuterContainer}>
                <div className={styles.srContentContainer}>
                    <div className={styles.srRatingContainer}>
                        <i className="Fas Fa-Chevron-Circle-Up"/>
                        <p className={styles.rating}>{rating}</p>
                        <i className="Fas Fa-Chevron-Circle-Down"/>
                    </div>
                    <img className={styles.cardImage} 
                    src={src}
                    onError={(e) => e.target.style.display = "none"}/>
                </div>
            </div>
        </div>
    )
}