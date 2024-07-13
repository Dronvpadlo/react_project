import React, { FC } from 'react';
import { useForm } from "react-hook-form";
import { IPosts } from "../../models/IPosts";
import { joiResolver } from "@hookform/resolvers/joi";
import postValidator from "../../postValidator/postValidator";
import { postService } from "../../services/postService";

interface IProps {
    addPost: (post: IPosts) => void;
}

const PostForm: FC<IProps> = ({ addPost }) => {
    const { handleSubmit, register, formState: { errors, isValid } }
        = useForm<IPosts>({ mode: "all", resolver: joiResolver(postValidator) });

    const customHandler = async (post: IPosts) => {
        const { data } = await postService.create(post);
        addPost(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <label>
                    <input type="number" placeholder="userId" {...register('userId')} />
                    {errors.userId && <div>{errors.userId.message}</div>}
                </label>
                <label>
                    <input type="text" placeholder="title" {...register('title')} />
                    {errors.title && <div>{errors.title.message}</div>}
                </label>
                <label>
                    <input type="text" placeholder="body" {...register('body')} />
                    {errors.body && <div>{errors.body.message}</div>}
                </label>
                <button disabled={!isValid}>Share</button>
            </form>
        </div>
    );
};

export default PostForm;
