import React from 'react';
import UserComponent from "./UserComponent";
import {useContextProvider} from "../../Context/ContextProvider";


const UsersComponent = () => {
    const {userStore: {allUsers}} = useContextProvider()

    return (
        <div>
            {
                allUsers.map((user, index) => <UserComponent key={index} user={user}/>)
            }

        </div>
    );
};

export default UsersComponent;