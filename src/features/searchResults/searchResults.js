import styles from './searchResults.module.css'
import { SearchResultCard } from '../searchResultCard/searchResultCard'

export const SearchResults = (props) => {

    const fakeState = [
        {id: 1, title: "pic1", rating: 123, src: "https://www.pixelstalk.net/wp-content/uploads/2016/12/Beautiful-Landscape-Background-for-PC.jpg"},
        {id: 2, title: "pic2", rating: 234, src: "https://media.blendernation.com/wp-content/uploads/2017/06/vondel-parc-hdri.jpg"},
        {id: 3, title: "pic3", rating: 345, src: "https://img.pngio.com/sunset-sun-vacations-free-photo-on-pixabay-sunset-png-images-960_640.png"},
        {id: 4, title: "pic4", rating: 456, src: "https://i.ytimg.com/vi/mhcg-Kli__I/maxresdefault.jpg"},
        {id: 5, title: "pic5", rating: 567, src: "https://publicdomainpictures.net/pictures/40000/velka/gorilla-1366883369BXE.jpg"},
        {id: 6, title: "pic6", rating: 678, src: "https://www.hdnicewallpapers.com/Walls/Big/Deer/Free_Download_Image_of_Roe_Deer.jpg"}
    ]

    return (
        <div className={styles.searchResultsContainer}>
            {fakeState.map(card => 
                <SearchResultCard key={card.id} title={card.title} rating={card.rating} src={card.src} />
                )}
        </div>
    )
}