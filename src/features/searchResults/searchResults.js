import styles from './searchResults.module.css'
import { SearchResultCard } from '../searchResultCard/searchResultCard'
import { selectSearchResults, selectSearchResultState } from './searchResultsSlice'
import { selectSearchTerm } from '../searchBar/searchBarSlice'
import { useSelector } from 'react-redux'
import { selectHomepageData, selectHomepageState } from '../homepage/homepageSlice';
import { selectSubredditData, selectSubredditState } from '../subreddit/subredditSlice'

export const SearchResults = (props) => {

    const type = props.type

    const searchTerm = useSelector(selectSearchTerm)
    let dataSelector, stateSelector

    if (type === "search"){
        stateSelector = selectSearchResultState;
        dataSelector = selectSearchResults
    }

    if (type === "home"){
        stateSelector = selectHomepageState;
        dataSelector = selectHomepageData;
    }

    if (type === "sub"){
        stateSelector = selectSubredditState;
        dataSelector = selectSubredditData
    }

    
    const data = useSelector(dataSelector)
    const state = useSelector(stateSelector)
        

        const error = state.resultsError;
        const loading = state.resultsLoading;
        const hasData = state.data;

        const initialHue = Math.floor(Math.random()*360)
    
        return (
            <div className={styles.searchResultsContainer}>
                {(type === "search") && hasData &&
                    <div className={styles.searchHeader}>
                        <h2>{searchTerm}</h2>
                        <p>search results</p>
                    </div>
                }
                {hasData ? 
                    (data.map((card, index) => 
                    <SearchResultCard 
                    key={index}
                    initHue={initialHue}
                    count={index} 
                    card_data={card}
                    />)) : 
                        loading ? (<h3>Loading...</h3>) : error? (<h3>Hmmm.... an error occured</h3>) : <h3>Welcome</h3>
                }
            </div>
    )

    
}

