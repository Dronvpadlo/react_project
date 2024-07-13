import React, { FC, PropsWithChildren,} from 'react';
import { IPosts } from "../../models/IPosts";
import PostComponent from "../PostComponent/PostComponent";

interface IProps extends PropsWithChildren {
    allPosts: IPosts[];
}

const PostsComponent: FC<IProps> = ({ allPosts }) => {
    return (
        <div>
            {allPosts.map(post => <PostComponent key={post.id} post={post} />)}
        </div>
    );
};

export default PostsComponent;
