import React, {FC, ReactNode} from 'react';

import {IPost} from "../../../types/IPost";






type UserComponentWithChildren<T> = T & {children?: ReactNode} & {clickHandler: (userId: number) => void}
const PostComponent:FC<UserComponentWithChildren<IPost>> = ({id, userId, title, body, clickHandler}) => {
    return (
        <div>
            ID: {id}<br/>
            User ID: {userId}<br/>
            Title: {title}<br/>
            Body: {body}<br/>
            <button onClick={() => {
                clickHandler(userId)
            }}>Comments
            </button>
            <hr/>
        </div>
    );
};

export default PostComponent;