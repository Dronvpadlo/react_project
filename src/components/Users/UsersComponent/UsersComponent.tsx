import React, {useEffect, useState} from 'react';
import UserComponent from "../UserComponent/UserComponent";
import {getAllUsers} from "../../../services/api.service";

const UsersComponent = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
       getAllUsers()
            .then(users =>{
                setUsers(users);
            });
    }, []);
    return (
        <div>
            {
                users.map((user, id) => <UserComponent key={id} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;