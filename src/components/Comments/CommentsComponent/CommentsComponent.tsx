import React, {FC, useEffect, useState} from 'react';
import {IComment} from "../../../types/IComment";
import {getAllComments} from "../../../services/api.service";
import CommentComponent from "../CommentComponent/CommentComponent";
import styles from './CommentsComponent.module.css'

const CommentsComponent:FC = () => {

    const [comments, setComments] = useState<IComment[]>([])

    useEffect(() => {
        getAllComments()
            .then(comments=>{
                setComments(comments)
            })
    }, []);

    return (
        <div className={styles.mainBlock}>
            {
                comments.map(({postId, id, name, email, body}, index) =>
                    <CommentComponent
                        key={index}
                        postId={postId}
                        id={id}
                        name={name}
                        email={email}
                        body={body}/>)
            }
        </div>
    );
};

export default CommentsComponent;