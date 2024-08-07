import React, {FC} from 'react';
import {PostWithCommentsType} from "../../Models/PostWithCommentsType";

interface IProps{
    items: PostWithCommentsType[]
}
const PostWithCommentsComponent:FC<IProps> = ({items}) => {
    return (
        <div>
            {
                items.map((item, index) =><div key={index}>
                    {item.title}
                    <div>
                        {
                            item.comments.map((comment, index)=>
                            <div key={index}>{comment.id}. {comment.name}<br/>
                                {comment.email}<br/>
                                {comment.body}
                                <hr/>
                            </div>)
                        }
                    </div>


                </div>)
            }
        </div>
    );
};

export default PostWithCommentsComponent;