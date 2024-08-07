import React, {FC} from 'react';
import {IPostsModel} from "../../Models/IPostsModel";

interface IProps{
    post:IPostsModel
}
const PostComponent:FC<IProps> = ({post}) => {
    return (
        <div>
            User ID: {post.userId}<br/>
            ID: {post.id}<br/>
            Title: {post.title}<br/>
            Body: {post.body}<br/>
            <hr/>
        </div>
    );
};

export default PostComponent;