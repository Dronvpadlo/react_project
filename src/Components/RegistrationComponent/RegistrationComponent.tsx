import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {IReg} from "../../Models/IReg";
import {userService} from "../../Services/api.service";
import styles from './RegComponent.module.css'

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
        <div className={styles.section}>
            <h3 className={styles.h2}>Registration Form</h3><br/>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <input className={styles.input} type="text" placeholder={'username'}{...register('username')}/><br/>
                <input className={styles.input} type="text" placeholder={'password'}{...register('password')}/><br/>
                <button className={styles.button}>Sing In</button>
            </form>
            {
                registrationStatus && (<div>Registration successfully</div>)
            }
        </div>
    );
};

export default RegistrationComponent;