import textIcon from '../../../images/text.png'
import styles from './cardContent.module.css';


export const Content = props => {

    const data = props.data

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

    const src = data.is_video ? data.thumbnail : is_gif ? 
                data.preview.images[0].variants.gif.source.url : data.url;


    if (is_text){
    return(
        <img src={textIcon} className={styles.cardImage}/>
    )}
    else{
        return(
            <img className={styles.cardImage} 
            src={src}
            onError={(e) => e.target.style.display = "none"}/> 
        )
    }
}