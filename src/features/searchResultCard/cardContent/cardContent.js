import textIcon from '../../../images/text.png'
import styles from './cardContent.module.css';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { postThunk } from '../../post/postSlice';


export const Content = props => {

    const data = props.data
    const postLink = props.link
    const dispatch = useDispatch();
    const history = useHistory();

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

    const handleClick = (e) => {
        console.log('handleclick')
        dispatch(postThunk(postLink))
        history.push("/post")
    }

    if (is_text){
        return(
            
            <div className={styles.cardTextImageContainer} onClick={handleClick}>
                    <img src={textIcon} className={styles.cardTextImage} alt=""/>
            </div> 
        )
    }

    else{
        return(
            <img className={styles.cardImage} 
            src={src}
            onError={(e) => e.target.style.display = "none"}
            alt={data.title}
            /> 
        )
    }
}