import React from 'react';
import {useForm} from "react-hook-form";
import {IAuth} from "../../Models/IAuth";
import {authService} from "../../Services/api.service";

const AuthComponent = () => {

    let {
        handleSubmit,
        register

} = useForm<IAuth>({
        defaultValues:{
            username: 'SKDron714',
            password: '$KDron284$'
        }
    })

    const authenticate =(data:IAuth) =>{
        authService.authUser(data);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(authenticate)}>
                <input type="text" placeholder={'username'}{...register('username')}/><br/>
                <input type="text" placeholder={'password'}{...register('password')}/><br/>
                <button>Log In</button>
            </form>
        </div>
    );
};

export default AuthComponent;