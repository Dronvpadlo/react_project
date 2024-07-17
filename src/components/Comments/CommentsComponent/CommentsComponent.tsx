import React, {useEffect, useState} from 'react';
import {IComment} from "../../../types/IComment";
import {getAllComments} from "../../../services/api.service";
import CommentComponent from "../CommentComponent/CommemtComponent";

const CommentsComponent = () => {

    const [comments, setComments] = useState<IComment[]>([])

    useEffect(() => {
        getAllComments()
            .then(comments=>{
                setComments(comments)
            })
    }, []);

    return (
        <div>
            {
                comments.map(({postId, id, name, email, body}, index) =>
                    <CommentComponent
                        key={index}
                        postId={postId}
                        id={id}
                        name={name}
                        email={email}
                        body={body}/>)
            }
        </div>
    );
};

export default CommentsComponent;