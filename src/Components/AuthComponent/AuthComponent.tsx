import React from 'react';
import {useForm} from "react-hook-form";
import {IAuth} from "../../Models/IAuth";

const AuthComponent = () => {

    let {
        handleSubmit,
        register

} = useForm<IAuth>()

    const OnHandleSubmit =(data:IAuth) =>{
        console.log(data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(OnHandleSubmit)}>
                <input type="text" placeholder={'username'}{...register('username')}/><br/>
                <input type="text" placeholder={'password'}{...register('password')}/><br/>
                <button>Log In</button>
            </form>
        </div>
    );
};

export default AuthComponent;