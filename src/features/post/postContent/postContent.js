import { useSelector } from "react-redux"
import { selectPostData } from "../postSlice";
import styles from './postContent.module.css'

export const PostContent = () => {
    const data = useSelector(selectPostData);
    
      

    const is_reddit_vid = data.is_video
    if (is_reddit_vid) {
        const src = data.media.reddit_video.fallback_url
        return (
            <iframe 
                src={src} 
                controls 
                allow={'autoplay unmute'} 
                mute={'false'}
                className={styles.video}
            
            />
        )
    }

    const is_embedded_vid = data.media;
    if (is_embedded_vid) {
        const encUri = data.media.oembed.html
        const decUri = decodeURI(encUri)
        
        return (
            <iframe src={decUri} />
        )
    }   

    

    if (data.selftext){
        
        return (
            <div>
                               
            </div>
        )
    }



    

    return(
        <div>
        </div>
    )
}