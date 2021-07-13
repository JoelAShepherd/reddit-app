import textIcon from '../../../images/text.png'
import styles from './cardContent.module.css';
import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux';
import { postThunk } from '../../post/postSlice';
import { commentsThunk } from '../../post/postComments/commentsSlice';


export const Content = props => {

    const data = props.data
    const postLink = props.link
    const dispatch = useDispatch();
    

    let is_gif;
    try { if(data.preview.reddit_video_preview.is_gif) {
        is_gif = true
    } }
    catch {
        is_gif = false
    }

    let is_text = false
    if (data.selftext){
        is_text = true
    }

    let src; 
    if (data.is_video) {
        src = data.thumbnail
    } else if (is_gif){
        try {
            src = data.preview.images[0].variants.gif.source.url
        } catch {
            src = data.thumbnail
        }
    } else {
        src = data.url
    }

    const handleClick = () => {
        dispatch(postThunk(postLink))
        dispatch(commentsThunk(postLink))
    }

    if (is_text){
        return(
            <Link to='/post' onClick={handleClick}>
                <div className={styles.cardTextImageContainer}>
                    <img src={textIcon} className={styles.cardTextImage} alt=""/>
                </div> 
            </Link>
        )
    }

    else{
        return(
            <Link to='/post' onClick={handleClick}>
                <img className={styles.cardImage} 
                src={src}
                onError={(e) => e.target.style.display = "none"}
                alt={data.title}
                /> 
            </Link>
        )
    }
}

/*

if (is_text){
        return(

            <div className={styles.cardTextImageContainer} onClick={handleClick}>
                    <img src={textIcon} className={styles.cardTextImage} alt=""/>
            </div> 
        )
    }

*/