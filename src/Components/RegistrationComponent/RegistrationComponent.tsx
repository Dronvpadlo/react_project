import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {IReg} from "../../Models/IReg";
import {userService} from "../../Services/api.service";

const RegistrationComponent = () => {

    let {
        handleSubmit,
        register
    } = useForm<IReg>()

    const [registrationStatus, setRegistrationStatus] = useState<boolean>(false)

    const onSubmitHandler = async (data:IReg) =>{
        let isReg = await userService.saveUser(data)
        setRegistrationStatus(isReg)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <input type="text" placeholder={'username'}{...register('username')}/><br/>
                <input type="text" placeholder={'password'}{...register('password')}/><br/>
                <button>Sing In</button>
            </form>
            {
                registrationStatus && (<div>Registration successfully</div>)
            }
        </div>
    );
};

export default RegistrationComponent;