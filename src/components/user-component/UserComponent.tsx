import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
import {getPostsOfUserByUser} from "../../services/api.service";

interface IProps{
    user : IUser
    getPosts: (id:number)=> void
}
const UserComponent: FC<IProps> = ({user, getPosts}) => {
    return (
        <div>
            {user.id}. {user.name} - <button onClick={() => {
            getPosts(user.id)

            }}>Open posts of user</button>
        </div>
    );
};

export default UserComponent;