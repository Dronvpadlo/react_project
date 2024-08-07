import React from 'react';
import PostComponent from "./PostComponent";
import {useStore} from "../../Context/store";

const PostsComponent = () => {

    const {postSlice:{allPosts}} = useStore();
    return (
        <div>
            {
                allPosts.map((post, index) => <PostComponent key={index} post={post}/>)
            }
            </div>
    );
};

export default PostsComponent;