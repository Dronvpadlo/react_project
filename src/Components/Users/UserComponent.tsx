import React, {FC} from 'react';
import {IUsersModel} from "../../Models/IUsersModel";
import {useStore} from "../../Context/store";


interface IProps {
    user:IUsersModel
}
const UserComponent:FC<IProps> = ({user}) => {
    const {userSlice:{setFavoriteUser}} = useStore();
    return (
        <div>
            ID: {user.id}. Name: {user.name}<br/>
            Username: {user.username}<br/>
            Email: {user.email} <br/>
            <button onClick={() =>{
                setFavoriteUser(user)
            }}>Choose</button>
            <hr/>
        </div>
    );
};

export default UserComponent;