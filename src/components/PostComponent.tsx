import {useForm} from "react-hook-form";
import {IPosts} from "../models/IPosts";


const PostComponent = () => {
    const {handleSubmit, register} = useForm<IPosts>();

    const customHandler = (formDataProps: IPosts)=> {
        console.log(formDataProps)}
    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
            <input type="number" placeholder="userId" {...register ('userId')}/>
            <input type="text" placeholder="title" {...register ('title')}/>
            <input type="text" placeholder="body" {...register ('body')}/>
            <button>Share</button>
            </form>
        </div>
    );
};

export default PostComponent;