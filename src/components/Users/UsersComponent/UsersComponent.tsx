import React, {FC, useEffect, useState} from 'react';
import UserComponent from "../UserComponent/UserComponent";
import {getAllUsers} from "../../../services/api.service";
import {IUser} from "../../../types/IUser";

const UsersComponent:FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
       getAllUsers()
            .then(users =>{
                setUsers(users);
            });
    }, []);
    const clickHandler = (id: number) => {
        console.log(id)
    }
    return (
        <div>
            {
                users.map(({id, name, username, email}, index) => <UserComponent
                    key={index}
                    id={id}
                    name={name}
                    username={username}
                    email={email}
                    clickHandler={clickHandler}/>)
            }
        </div>
    );
};

export default UsersComponent;