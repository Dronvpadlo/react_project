import React, {FC, ReactNode} from 'react';

import {IPost} from "../../../types/IPost";






type UserComponentWithChildren<T> = T & {children?: ReactNode}
const UserPostComponent:FC<UserComponentWithChildren<IPost>> = ({id, userId, title, body}) => {
    return (
        <div>
            ID: {id}<br/>
            User ID: {userId}<br/>
            Title: {title}<br/>
            Body: {body}<br/>
            <hr/>
        </div>
    );
};

export default UserPostComponent;