import React, {FC, useEffect, useState} from 'react';
import {getAllPosts, getCommentsOfUserByPost, getPostsOfUserByUserId} from "../../../services/api.service";
import {IPost} from "../../../types/IPost";
import PostComponent from "../PostComponent/PostComponent";
import {IComment} from "../../../types/IComment";
import CommentComponent from "../../Comments/CommentComponent/CommemtComponent";

const PostsComponent:FC = () => {
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        getAllPosts()
            .then(posts =>{
                setPosts(posts);
            })
    }, []);
    const [comments, setComments] = useState<IComment[]>([])
    const clickHandler = (userId: number) => {
        getCommentsOfUserByPost(userId)
            .then(comments =>{
                setComments(comments)
            });
    }

    return (
        <div>
            {
            posts.map(({userId, id, title, body}, index) => <PostComponent
            key={index}
            id={id}
            title={title}
            userId={userId}
            body={body}
            clickHandler={clickHandler}/>)
        }
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

export default PostsComponent;