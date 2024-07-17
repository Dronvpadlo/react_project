import React, {FC, ReactNode} from 'react';
import {IUser} from "../../../types/IUser";




type UserComponentWithChildren<T> = T & {children?: ReactNode} & {clickHandler: (id: number) => void}
const UserComponent:FC<UserComponentWithChildren<IUser>> = ({id, name, username, email, clickHandler}) => {
    return (
        <div>
            {id}. {name} <br/>
            Username: {username} <br/>
            Email: {email}<br/>

            <button onClick={() =>{
                clickHandler(id)}}>Posts</button>
            <hr/>
        </div>
    );
};

export default UserComponent;