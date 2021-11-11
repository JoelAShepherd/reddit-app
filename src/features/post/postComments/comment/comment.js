import styles from './comment.module.css'
import redditLogo from '../../../../images/redditLogo.png';
import { parseMD } from '../../../../tools/markdown';
import { Markup } from 'interweave'


export const Comment = (props) => {
    const replies = props.data.replies

    let lightness = 92 - (5*props.depth)
    if (lightness < 65){
        lightness = 65;
    }
    let hue = 83 + (15 * props.depth) % 360;
    
    const style = { backgroundColor: `hsl(${hue}, 100%, ${lightness}%)`}

    if (!props.body) {
        return (
            <div></div>
        )
    }


    return (
        <div className={styles.commentContainer} style={style}>
            <div className={styles.authorContainer}>
                <img className={styles.commentAuthorImg} src={redditLogo} alt=""/>
                <p className={styles.authorName}>{props.data.author}</p>
            </div>
            <div className={styles.innerContainer}>
                <div className={styles.bqBar} ></div>
                <div>
                    <Markup content={parseMD(props.body)} />
                    {replies && replies.data.children.map(reply => 
                        <Comment body={reply.data.body} data={reply.data} key={reply.data.id} depth={props.depth + 1}/>
                        )}
                </div>
            </div>
        </div>
    )
}

