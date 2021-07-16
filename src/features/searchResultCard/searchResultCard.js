import styles from './searchResultCard.module.css';
import { Ratings } from './ratings/ratings'
import { Content } from './cardContent/cardContent';
import { Subreddit } from './subreddit/subreddit';
import { CardInfo } from './cardInfo/cardInfo';

export const SearchResultCard = (props) => {

    const data = props.card_data
    const index = props.count
    let hue = (props.initHue + (12*index))
    if (hue > 360){
        hue = hue-360;
    }
    const style = { backgroundColor: `hsl(${hue}, 100%, 85%)`}

    const { title, subreddit } = data
    const rating = data.ups
    const rawLink = data.permalink
    const clippedLink = rawLink.replace(/\/$/, "")
    

    return (
        <div className={styles.srContainer} style={style}>
                <Ratings rating={rating}/>
                <div>
                    <Subreddit subreddit={subreddit}/>
                    <div className={styles.srContentContainer}>
                        <Content data={data} link={clippedLink}/>
                        <CardInfo title={title}  link={clippedLink}/>
                    </div>
                </div>
        </div>
    )
}