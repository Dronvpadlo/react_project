import React, {FC, ReactNode} from 'react';

import {IPost} from "../../../types/IPost";




type UserComponentWithChildren<T> = T & {children?: ReactNode}
const PostComponent:FC<UserComponentWithChildren<IPost>> = ({id, userId, title, body}) => {
    return (
        <div>
            ID: {id}<br/>
            User ID: {userId}<br/>
            Title: {title}<br/>
            Body: {body}<br/>
        </div>
    );
};

export default PostComponent;