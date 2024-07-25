import React from 'react';
import {useForm} from "react-hook-form";
import {IReg} from "../../Models/IReg";

const RegistrationComponent = () => {

    let {
        handleSubmit,
        register
    } = useForm<IReg>()

    const onSubmitHandler =(data:IReg) =>{
console.log(data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <input type="text" placeholder={'username'}{...register('username')}/><br/>
                <input type="text" placeholder={'password'}{...register('password')}/><br/>
                <button>Sing In</button>
            </form>
        </div>
    );
};

export default RegistrationComponent;