import React, { FC } from 'react';
import { IPost } from "../../models/IPost";
import styles from './posts.module.css'

interface IProps {
    posts: IPost[];
}

const PostsComponent: FC<IProps> = ({ posts }) => {
    const hasPosts = posts && posts.length > 0;
    const filteredPosts = posts.filter(post => post.title && post.title.trim().length > 0);

    return (
        <div className={styles.answer}>
            {hasPosts ? (
                <ul>
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map(post => <p key={post.id}>{post.title}</p>)
                    ) : (
                        <p>posts not found</p>
                    )}
                </ul>
            ) : (
                <p>posts not found</p>
            )}
        </div>
    );
};

export default PostsComponent;
