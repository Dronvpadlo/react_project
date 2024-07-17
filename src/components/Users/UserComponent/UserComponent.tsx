import React, {FC, ReactNode} from 'react';
import {IUser} from "../../../types/IUser";
import styles from './User.module.css'




type UserComponentWithChildren<T> = T & {children?: ReactNode} & {clickHandler: (id: number) => void}
const UserComponent:FC<UserComponentWithChildren<IUser>> = ({id, name, username, email, clickHandler}) => {
    return (
        <div className={styles.user}>
            {id}. {name} <br/>
            Username: {username} <br/>
            Email: {email}<br/>

            <button className={styles.button} onClick={() =>{
                clickHandler(id)}}>Posts</button>
        </div>
    );
};

export default UserComponent;