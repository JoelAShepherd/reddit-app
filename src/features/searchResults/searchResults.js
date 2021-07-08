import styles from './searchResults.module.css'
import { SearchResultCard } from '../searchResultCard/searchResultCard'
import { selectSearchResults, selectSearchResultState } from './searchResultsSlice'
import { useSelector } from 'react-redux'

export const SearchResults = (props) => {

    const searchResultsData = useSelector(selectSearchResults)
    const searchResultsState = useSelector(selectSearchResultState)
    const error = searchResultsState.resultsError;
    const loading = searchResultsState.resultsLoading;
    const hasData = searchResultsState.data;


    return (
        <div className={styles.searchResultsContainer}>
            {hasData ? 
                (searchResultsData.map((card, index) => 
                <SearchResultCard 
                key={index} 
                card_data={card}
                />)) : 
                    loading ? (<h3>Loading...</h3>) : error? (<h3>Hmmm.... an error occured</h3>) : <h3>Welcome</h3>
            }
        </div>
    )
}

/* 

searchResultsData.map((card, index) => 
                <SearchResultCard key={index} title={card.title} rating={card.ups} src={card.preview.images.resolutions[3].url} />


                title={card.title} 
                rating={card.ups} 
                is_video={card.is_video}
                imgSrc={card.url}
                thumbnail={card.thumbnail}
                is_gif={card.preview.reddit_video_preview.is_gif ? true : false}

*/