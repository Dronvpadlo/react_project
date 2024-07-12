import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {IPosts} from "../../models/IPosts";
import {postService} from "../../services/postService";
import PostComponent from "../PostComponent/PostComponent";

interface IProps extends PropsWithChildren{
    change: boolean;

}

const PostsComponent:FC<IProps> = ({change}) => {
    const [posts, setPost] = useState<IPosts[]>([]);

    useEffect(()=>{
        postService.getAll().then(({data})=>setPost(data))
    })
    return (
        <div>
            {posts.map(post => <PostComponent key={post.id} post={post}/>)}
        </div>
    );
};

export default PostsComponent;