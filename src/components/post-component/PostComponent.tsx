import React, { Component } from 'react';
import styles from './postComponent.module.css';

type PostType = {
    id: number,
    title: string,
    body: string
}

type PropType = {
    posts: PostType[],
    postsLoaded: boolean
}

class PostComponent extends Component<PropType> {
    render() {
        const { posts, postsLoaded } = this.props;

        return (
            <div className={styles.bgc}>
                {postsLoaded && posts.length === 0 ? (
                    <div>No posts available</div>
                ) : (
                    postsLoaded && (
                        <ul>
                            {posts.map(post => (
                                <li key={post.id}>
                                    <h3>{post.title}</h3>
                                    <p>{post.body}</p>
                                </li>
                            ))}
                        </ul>
                    )
                )}
            </div>
        );
    }
}

export default PostComponent;
