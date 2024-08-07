import React, {FC} from 'react';
import {IUsersModel} from "../../Models/IUsersModel";
interface IProps {
    user:IUsersModel
}
const UserComponent:FC<IProps> = ({user}) => {
    return (
        <div>
            ID: {user.id}. Name: {user.name}<br/>
            Username: {user.username}<br/>
            Email: {user.email}
            <hr/>
        </div>
    );
};

export default UserComponent;