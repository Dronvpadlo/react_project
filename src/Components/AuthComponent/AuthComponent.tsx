import React from 'react';
import {useForm} from "react-hook-form";
import {IAuth} from "../../Models/IAuth";
import {authService} from "../../Services/api.service";
import styles from './Auth.module.css'

const AuthComponent = () => {

    let {
        handleSubmit,
        register

} = useForm<IAuth>({
        defaultValues:{
            username: 'SKDron',
            password: '$KDr0n27'
        }
    })

    const authenticate =(data:IAuth) =>{
        authService.authUser(data);
    }
    return (
        <div className={styles.section}>
            <h3 className={styles.h2}>Authentication Form</h3><br/>
            <form onSubmit={handleSubmit(authenticate)}>
                <input className={styles.input} type="text" placeholder={'username'}{...register('username')}/><br/>
                <input className={styles.input} type="text" placeholder={'password'}{...register('password')}/><br/>
                <button className={styles.button}>Log In</button>
            </form>
        </div>
    );
};

export default AuthComponent;