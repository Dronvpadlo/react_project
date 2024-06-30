import React, {useEffect, useState} from 'react';
import UserComponent from "../user-component/userComponent";
import {IUser} from "../../models/IUser";

const UsersComponent = () => {
    const [usersList, setUsersList] = useState<IUser[]>([]);
    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(res =>{
                setUsersList(res.users)
                console.log(res.users)
            });
    }, []);

    return (
        <div>
            <ul>
                {
                    usersList.map((user) => (<UserComponent key={user.id} user={user}></UserComponent>))
                }
            </ul>
        </div>
    );
};

export default UsersComponent;