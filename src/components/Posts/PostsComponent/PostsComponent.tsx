import React, {useEffect, useState} from 'react';
import {getAllPosts} from "../../../services/api.service";
import {IPost} from "../../../types/IPost";
import PostComponent from "../PostComponent/PostComponent";

const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        getAllPosts()
            .then(posts =>{
                setPosts(posts);
            })
    }, []);



    return (
        <div>
            {
            posts.map(({userId, id, title, body}, index) => <PostComponent
            key={index}
            id={id}
            title={title}
            userId={userId}
            body={body}/>)
        }
            </div>
    );
};

export default PostsComponent;