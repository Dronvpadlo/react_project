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
                                <ul key={post.id}>
                                    <li>{post.title}</li>
                                    <li>{post.body}</li>
                                </ul>
                            ))}
                        </ul>
                    )
                )}
            </div>
        );
    }
}

export default PostComponent;
