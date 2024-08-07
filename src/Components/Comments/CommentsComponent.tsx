import React from 'react';
import CommentComponent from "./CommentComponent";
import {useContextProvider} from "../../Context/ContextProvider";

const CommentsComponent = () => {
    const {commentStore:{allComments}} = useContextProvider()
    return (
        <div>
            {
                allComments.map((comment, index) => <CommentComponent key={index} comment={comment}/>)
            }
        </div>
    );
};

export default CommentsComponent;