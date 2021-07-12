import { useSelector } from "react-redux"
import { selectPostData } from "../postSlice";
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

export const PostContent = () => {
    const data = useSelector(selectPostData);
    const unescapeHTML = str =>
  str.replace(
    /&amp;|&lt;|&gt;|&#39;|&quot;/g,
    tag =>
      ({
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&#39;': "'",
        '&quot;': '"'
      }[tag] || tag)
  );
      

    const is_reddit_vid = data.is_video
    if (is_reddit_vid) {
        const src = data.media.reddit_video.fallback_url
        return (
            <div>
                <video src={src} autoPlay controls muted></video>
            </div>
        )
    }

    const is_embedded_vid = data.media;
    if (is_embedded_vid) {
        const encUri = data.media.oembed.html
        const decUri = decodeURI(encUri)
        const unEscUri = unescapeHTML(decUri)
        
        const createMarkup =() => {
            return {__html: unEscUri}
        }

        return(
            <div dangerouslySetInnerHTML={createMarkup()}></div>
        )
    }

    const markdown = `A paragraph with *emphasis* and **strong importance**.

    > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
    
    * Lists
    * [ ] todo
    * [x] done
    
    A table:
    
    | a | b |
    | - | - |
    `

    if (data.selftext){
        
        return (
            <div>
                <ReactMarkdown remarkPlugins={[gfm]} children={data.selftext}/>   
                <ReactMarkdown remarkPlugins={[gfm]} children={markdown} />

                
            </div>
        )
    }



    

    return(
        <div>
        <p>Post content goes here</p>
        </div>
    )
}