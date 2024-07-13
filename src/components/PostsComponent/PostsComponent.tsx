import React, { FC, PropsWithChildren,} from 'react';
import { IPosts } from "../../models/IPosts";
import PostComponent from "../PostComponent/PostComponent";
import styles from './PostsComponent.module.css'

interface IProps extends PropsWithChildren {
    allPosts: IPosts[];
}

const PostsComponent: FC<IProps> = ({ allPosts }) => {
    return (
        <div className={styles.posts}>
            {allPosts.map(post => <PostComponent key={post.id} post={post} />)}
        </div>
    );
};

export default PostsComponent;
