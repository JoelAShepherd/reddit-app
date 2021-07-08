import styles from './searchResultCard.module.css';
import { Ratings } from './ratings/ratings'
import { Content } from './cardContent/cardContent';
import { CardInfo } from './cardInfo/cardInfo';

export const SearchResultCard = (props) => {

    const data = props.card_data

    const { title, subreddit } = data
    const rating = data.ups
    

    return (
        <div className={styles.srContainer}>
            <div className={styles.srContentContainer}>
                <Ratings rating={rating}/>
                <Content data={data}/>
            </div>
            <CardInfo title={title} subreddit={subreddit}/>
        </div>
    )
}