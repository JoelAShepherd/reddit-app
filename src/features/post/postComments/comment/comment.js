import styles from './comment.module.css'


export const Comment = (props) => {
    const replies = props.data.replies
    console.log(replies)

    return (
        <div className={styles.commentContainer} style={{paddingLeft: props.depth * 8}}>
            {props.body && <div className={styles.bqBar}></div>}
            
            <div className={styles.innerContainer}>
            <p>{props.body}</p>
            {replies && replies.data.children.map(reply => 
                <Comment body={reply.data.body} data={reply.data} key={reply.data.id} depth={props.depth + 1}/>
                )}
            </div>
        </div>
    )
}