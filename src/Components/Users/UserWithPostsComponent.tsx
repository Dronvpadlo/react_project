import React, {FC} from 'react';
import {UserWithPostsType} from "../../Models/UserWithPostsType";


interface IProps{
    items: UserWithPostsType[]
}
const UserWithPostsComponent:FC<IProps> = ({items}) => {
    return (
        <div>
            {
                items.map((item, index) =><div>
                    {item.name}
                    <div>
                        {
                            item.posts.map((post, index)=>
                                <div key={index}>{post.id}. {post.title}<br/>
                                     {post.body}
                                </div>
                            )
                        }
                        <hr/>
                    </div>
                </div>)
            }
        </div>
    );
};

export default UserWithPostsComponent;