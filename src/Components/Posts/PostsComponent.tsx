import React from 'react';
import PostComponent from "./PostComponent";
import {useContextProvider} from "../../Context/Store";

const PostsComponent = () => {
    const {postStore: {allPosts}} = useContextProvider()
    return (
        <div>
            {
                allPosts.map((post, index) => <PostComponent key={index} post={post}/>)
            }
            </div>
    );
};

export default PostsComponent;