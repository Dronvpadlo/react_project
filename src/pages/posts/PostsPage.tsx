import React from 'react';
import PostsComponent from "../../components/Posts/PostsComponent/PostsComponent";
import styles from './PostsPage.module.css'

const PostsPage = () => {
    return (
        <div className={styles.bgc}>
            <PostsComponent/>
        </div>
    );
};

export default PostsPage;