import React, {FC} from 'react';
import {ICommentsModel} from "../../Models/ICommentsModel";

interface IProps{
    comment: ICommentsModel
}
const CommentComponent:FC<IProps> = ({comment}) => {
    return (
        <div>
            Post ID:{comment.postId}<br/>
            ID: {comment.id}<br/>
            Name: {comment.name}<br/>
            Email: {comment.email}<br/>
            Body: {comment.body}<br/>
            <hr/>
        </div>
    );
};

export default CommentComponent;