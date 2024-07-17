import React, {useEffect, useState} from 'react';
import {getPostsOfUserByUser} from "../../../services/api.service";

const PostsComponent = () => {

    const [posts, setPosts] = useState([])
    useEffect((id) => {
        getPostsOfUserByUser(id)
            .then(posts =>{
                console.log(posts)
            })
    }, []);
    return (
        <div>

            </div>
    );
};

export default PostsComponent;