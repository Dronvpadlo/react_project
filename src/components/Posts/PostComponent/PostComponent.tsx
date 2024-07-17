import React, {FC, ReactNode} from 'react';

import {IPost} from "../../../types/IPost";




type UserComponentWithChildren<T> = T & {children?: ReactNode}
const PostComponent:FC<UserComponentWithChildren<IPost>> = ({id, userId, title, body}) => {
    return (
        <div>
            {id}<br/>
            {userId}
            {title} <br/>
            {body}<br/>
        </div>
    );
};

export default PostComponent;