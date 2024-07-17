import React, {FC, ReactNode} from 'react';
import {IPost} from "../../../types/IPost";
import styles from './UserPosts.module.css'





type UserComponentWithChildren<T> = T & {children?: ReactNode}
const UserPostsComponent:FC<UserComponentWithChildren<IPost>> = ({id, userId, title, body}) => {
    return (
        <div className={styles.userPostSection}>
            ID: {id}<br/>
            User ID: {userId}<br/>
            Title: {title}<br/>
            Body: {body}<br/>
        </div>
    );
};

export default UserPostsComponent;