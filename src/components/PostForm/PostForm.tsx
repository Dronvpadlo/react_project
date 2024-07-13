import React, { FC } from 'react';
import { useForm } from "react-hook-form";
import { IPosts } from "../../models/IPosts";
import { joiResolver } from "@hookform/resolvers/joi";
import postValidator from "../../postValidator/postValidator";
import { postService } from "../../services/postService";
import styles from './PostForm.module.css'
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
        <div className={styles.positionForm}>
            <form onSubmit={handleSubmit(customHandler)}>
                <label>
                    <input className={styles.userIdInput} type="number" placeholder="userId" {...register('userId')} />

                </label>
                <label>
                    <input className={styles.titleInput} type="text" placeholder="title" {...register('title')} />

                </label>
                <label>
                    <input className={styles.bodyInput} type="text" placeholder="body" {...register('body')} />

                </label>
                <button disabled={!isValid} className={styles.button}>Share</button>
                <div className={styles.errors}>
                     {errors.userId && <div className={styles.error}>{errors.userId.message}</div>}
                     {errors.title && <div className={styles.error}>{errors.title.message}</div>}
                     {errors.body && <div className={styles.error}>{errors.body.message}</div>}
                </div>
            </form>
        </div>
    );
};

export default PostForm;
