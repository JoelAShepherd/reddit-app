import styles from './searchResultCard.module.css';
import { Ratings } from './ratings/ratings'
import { Content } from './cardContent/cardContent';

export const SearchResultCard = (props) => {

    const data = props.card_data

    
    
    const { title } = data
    const rating = data.ups
    

    return (
        <div className={styles.srContainer}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.srContentOuterContainer}>
                <div className={styles.srContentContainer}>
                    <Ratings rating={rating}/>
                    <Content data={data}/>
                </div>
            </div>
        </div>
    )
}