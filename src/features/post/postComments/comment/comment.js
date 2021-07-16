import styles from './comment.module.css'
import redditLogo from '../../../../images/redditLogo.png';
import { Parser, HtmlRenderer } from 'commonmark'
import { Markup } from 'interweave'


export const Comment = (props) => {
    const replies = props.data.replies

    if (!props.body) {
        return (
            <div></div>
        )
    }

    const reader = new Parser();
    const writer = new HtmlRenderer();
    const parsed = reader.parse(props.body);
    
    const result = writer.render(parsed);
    

    return (
        <div className={styles.commentContainer}>
            <div className={styles.authorContainer}>
                <img className={styles.commentAuthorImg} src={redditLogo} alt=""/>
                <p className={styles.authorName}>{props.data.author}</p>
            </div>
            <div className={styles.innerContainer}>
                <div className={styles.bqBar} ></div>
                <div>
                    <Markup content={result} />
                    {replies && replies.data.children.map(reply => 
                        <Comment body={reply.data.body} data={reply.data} key={reply.data.id} />
                        )}
                </div>
            </div>
        </div>
    )
}

