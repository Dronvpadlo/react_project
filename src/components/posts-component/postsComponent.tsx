import React, {FC} from 'react';
import {IPost} from "../../models/IPost";

interface IProps {
    posts: IPost[]
}
const PostsComponent: FC<IProps> = ({posts}) => {
    return (
        <div>
            {
                posts.map(value => <li key={value.id}>{value.id}. {value.title}</li>)
            }
        </div>
    );
};

export default PostsComponent;