import React from 'react';
import CommentComponent from "./CommentComponent";
import {useStore} from "../../Context/store";

const CommentsComponent = () => {
    const {commentSlice:{allComments}} = useStore();
    return (
        <div>
            {
                allComments.map((comment, index) => <CommentComponent key={index} comment={comment}/>)
            }
        </div>
    );
};

export default CommentsComponent;