import React, {useEffect, useMemo, useState} from 'react';
import PostWithCommentsComponent from "./PostWithCommentsComponent";
import {useStore} from "../../Context/store";
import {PostWithCommentsType} from "../../Models/PostWithCommentsType";

const PostsWithCommentsComponent = () => {

    const {postSlice:{allPosts}, commentSlice: {allComments}} = useStore();
    const [postWithCommentsState, setPostWithCommentsState] = useState<PostWithCommentsType[]>([])

    const postsWithCommentsArray = useMemo(() => {
        return allPosts.map(post =>{
            return {...post, comments: allComments.filter(comment => comment.postId === post.id)}
        })
    }, [allPosts, allComments]);
    useEffect(() => {
        setPostWithCommentsState(postsWithCommentsArray)
    }, [postsWithCommentsArray]);

    return (
        <div>
            <PostWithCommentsComponent items={postWithCommentsState}/>
            </div>
    );
};

export default PostsWithCommentsComponent;