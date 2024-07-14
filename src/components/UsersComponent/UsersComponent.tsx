import React, {useEffect, useState} from 'react';
import UserComponent from "../UserComponent/UserComponent";

const UsersComponent = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(value => value.json())
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