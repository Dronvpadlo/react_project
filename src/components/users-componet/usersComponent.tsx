import React, {useEffect, useState} from 'react';
import UserComponent from "../user-component/userComponent";

const UsersComponent = () => {
    const [users, setUsers] = useState<any[]>([]);
    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(res =>{
                setUsers(res.users)
                console.log(res.users)
            });
    }, []);

    return (
        <div>
            <ul>
                users.map((user) => (<UserComponent user={user}/>))
            </ul>
        </div>
    );
};

export default UsersComponent;