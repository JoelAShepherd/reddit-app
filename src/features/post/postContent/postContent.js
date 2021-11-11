import { useSelector } from "react-redux"
import { selectPostData } from "../postSlice";
import { parseMD } from "../../../tools/markdown";
import { Markup } from 'interweave'
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
                title={data.title}
            />
        )
    }

    const is_embedded_vid = data.media;
    if (is_embedded_vid) {
        const encUri = data.media.oembed.html
        const decUri = decodeURI(encUri)
        
        return (
            <iframe src={decUri} title={data.title}/>
        )
    }   

    

    if (data.selftext){
        
        return (
            <div>
                <Markup content={parseMD(data.selftext)} />   
            </div>
        )
    }

    if (data.url_overridden_by_dest){
        return (
            <div>
                <img src={data.url_overridden_by_dest} 
                alt={data.title} 
                className={styles.img}
                onError={(e) => {e.target.onError=null; e.target.src=data.thumbnail}}    />
            </div>
        )
    }

    

    return(
        <div>
        </div>
    )
}