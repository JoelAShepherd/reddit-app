import styles from './searchResults.module.css'
import { SearchResultCard } from '../searchResultCard/searchResultCard'
import { selectSearchResults, selectSearchResultState } from './searchResultsSlice'
import { selectSearchTerm } from '../searchBar/searchBarSlice'
import { useSelector } from 'react-redux'

export const SearchResults = (props) => {

    const searchTerm = useSelector(selectSearchTerm)
    const searchResultsData = useSelector(selectSearchResults)
    const searchResultsState = useSelector(selectSearchResultState)
    const error = searchResultsState.resultsError;
    const loading = searchResultsState.resultsLoading;
    const hasData = searchResultsState.data;


    return (
        <div className={styles.searchResultsContainer}>
            {hasData &&
                <div className={styles.searchHeader}>
                    <h2>{searchTerm}</h2>
                    <p>search results</p>
                </div>
            }
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