import React, {useEffect, useState} from 'react';
import UserComponent from "../user-component/userComponent";
import {IUser} from "../../models/IUser";
import {getAllUsers} from "../../services/api.service";

const UsersComponent = () => {
    const [usersList, setUsersList] = useState<IUser[]>([]);
    useEffect(() => {
        getAllUsers().then((res) => {
            setUsersList(res.users);
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