import React, {FC, useEffect, useState} from 'react';
import {getAllPosts, getCommentsOfUserByPost} from "../../../services/api.service";
import {IPost} from "../../../types/IPost";
import PostComponent from "../PostComponent/PostComponent";
import {IComment} from "../../../types/IComment";
import CommentComponent from "../../Comments/CommentComponent/CommemtComponent";
import styles from './PostsComponent.module.css'

const PostsComponent:FC = () => {
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        getAllPosts()
            .then(posts =>{
                setPosts(posts);
            })
    }, []);
    const [comments, setComments] = useState<IComment[]>([])
    const clickHandler = (id: number) => {
        getCommentsOfUserByPost(id)
            .then(comments =>{
                setComments(comments)
            });
    }

    return (
        <div className={styles.mainDiv}>
            <div className={styles.postsBlock}>
            {
            posts.map(({userId, id, title, body}, index) => <PostComponent
            key={index}
            id={id}
            title={title}
            userId={userId}
            body={body}
            clickHandler={clickHandler}/>)
        }
            </div>
            <div className={styles.commentsBlock}>
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
            </div>
    );
};

export default PostsComponent;