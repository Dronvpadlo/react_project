import {FC, PropsWithChildren} from "react";
import {IPosts} from "../../models/IPosts";
import React from 'react';
import styles from './postComponent.module.css'
interface IProps extends PropsWithChildren {
    post: IPosts
}

const PostComponent: FC<IProps> = ({post}) => {
    const {id, userId, title, body} = post
    return (
        <div className={styles.post}>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export default PostComponent;