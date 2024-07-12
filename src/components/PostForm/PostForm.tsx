import {useForm} from "react-hook-form";
import {IPosts} from "../../models/IPosts";
import {joiResolver} from "@hookform/resolvers/joi";
import postValidator from "../../postValidator/postValidator";
import {postService} from "../../services/postService";
import {FC, PropsWithChildren} from "react";
import {ISetState} from "../../models/resType";

interface IProps extends PropsWithChildren{
    setChange:ISetState<boolean>
}
const PostForm:FC<IProps> = ({setChange}) => {
    const {handleSubmit, register, formState:{errors, isValid}}
        = useForm<IPosts>({mode: "all", resolver: joiResolver(postValidator)});

    const customHandler = async (post: IPosts)=> {
        await postService.create(post);
        setChange(prevState => !prevState)

    }
    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <label>
                    <input type="number" placeholder="userId" {...register('userId')}/>
                    {errors.userId && <div>{errors.userId.message}</div>}
                </label>
                <label>
                    <input type="text" placeholder="title" {...register('title')}/>
                    {errors.title && <div>{errors.title.message}</div>}
                </label>
                <label>
                    <input type="text" placeholder="body" {...register('body')}/>
                    {errors.body && <div>{errors.body.message}</div>}
                </label>
                <button disabled={!isValid}>Share</button>
            </form>
        </div>
    );
};

export default PostForm;