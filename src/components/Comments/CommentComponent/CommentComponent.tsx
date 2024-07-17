import React, {FC, ReactNode} from 'react';
import {IComment} from "../../../types/IComment";
import styles from './Comment.module.css'



type CommentComponentWithChildren<T> = T & {children?: ReactNode}
const CommentComponent:FC<CommentComponentWithChildren<IComment>> = ({postId, id, name, email, body}) => {
    return (
        <div className={styles.comments}>
            Post Id: {postId}<br/>
            ID: {id}<br/>
            Name: {name}<br/>
            Email: {email}<br/>
            Body: {body}<br/>
        </div>
    );
}

export default CommentComponent;