import textIcon from '../../../images/text-icon.jpg'
import styles from './cardContent.module.css';
import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux';
import { postThunk } from '../../post/postSlice';
import { commentsThunk } from '../../post/postComments/commentsSlice';


export const Content = props => {

    const data = props.data
    const postLink = props.link
    const dispatch = useDispatch();
    

    let is_text = false
    if (data.selftext){
        is_text = true
    }

    const src = data.thumbnail
    

    const handleClick = () => {
        dispatch(postThunk(postLink))
        dispatch(commentsThunk(postLink))
    }

    if (is_text){
        return(
            <Link to='/post' onClick={handleClick} className={styles.cardTextImageContainer}>
                <img src={textIcon} className={styles.cardTextImage} alt=""/>
            </Link>
        )
    }

    else{
        return(
            <Link to='/post' onClick={handleClick} className={styles.cardImageContainer}>
                <img className={styles.cardImage} 
                src={src}
                onError={(e) => e.target.style.display = "none"}
                alt={data.title}
                /> 
            </Link>
        )
    }
}

