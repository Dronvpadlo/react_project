import React, {FC, ReactNode} from 'react';
import {IComment} from "../../../types/IComment";




type CommentComponentWithChildren<T> = T & {children?: ReactNode}
const CommentComponent:FC<CommentComponentWithChildren<IComment>> = ({postId, id, name, email, body}) => {
    return (
        <div>
            Post Id: {postId}<br/>
            ID: {id}<br/>
            Name: {name}<br/>
            Email: {email}<br/>
            Body: {body}<br/>
            <hr/>
        </div>
    );
};

export default CommentComponent;