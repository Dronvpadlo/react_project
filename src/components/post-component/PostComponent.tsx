import React from 'react';

type PostType = {
    id: number,
    title: string,
    body: string
}

type PropType = {
    posts: PostType[],
    postsLoaded: boolean
}

const PostComponent: React.FC<PropType> = ({ posts, postsLoaded }) => {
    return (
        <div>
            {postsLoaded && posts.length === 0 ? (
                <div>No posts available</div>
            ) : (
                <ul>
                    {posts.map(post => (
                        <div key={post.id}>
                            {post.title}
                            {post.body}
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default PostComponent;
