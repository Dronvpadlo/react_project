import React from 'react';
import UserComponent from "./UserComponent";
import {useStore} from "../../Context/store";


const UsersComponent = () => {

    const {userSlice:{allUsers}} = useStore();
    return (
        <div>
            {
                allUsers.map((user, index) => <UserComponent key={index} user={user}/>)
            }

        </div>
    );
};

export default UsersComponent;