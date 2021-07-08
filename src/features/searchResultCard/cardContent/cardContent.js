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

    if (is_text){
    return(
        <div className={styles.cardTextImageContainer}>
            <img src={textIcon} className={styles.cardTextImage} alt=""/>
        </div>
    )}
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