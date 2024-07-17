import React, {FC, ReactNode} from 'react';
import {IPost} from "../../../types/IPost";
import styles from './PostComponent.module.css'


type UserComponentWithChildren<T> = T & {children?: ReactNode} & {clickHandler: (id: number) => void}
const PostComponent:FC<UserComponentWithChildren<IPost>> = ({id, userId, title, body, clickHandler}) => {
    return (
        <div className={styles.posts}>
            ID: {id}<br/>
            User ID: {userId}<br/>
            Title: {title}<br/>
            Body: {body}<br/>
            <button className={styles.button} onClick={() => {
                clickHandler(id)
            }}>Comments
            </button>
        </div>
    );
};

export default PostComponent;