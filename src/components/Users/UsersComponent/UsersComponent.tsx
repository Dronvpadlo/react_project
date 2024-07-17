import React, {FC, useEffect, useState} from 'react';
import UserComponent from "../UserComponent/UserComponent";
import {getAllUsers, getPostsOfUserByUserId} from "../../../services/api.service";
import {IUser} from "../../../types/IUser";
import {IPost} from "../../../types/IPost";
import UserPostComponent from "../../Posts/UserPostComponent/UserPostComponent";

const UsersComponent:FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
       getAllUsers()
            .then(users =>{
                setUsers(users);
            });
    }, []);

    const [posts, setPosts] = useState<IPost[]>([])
    const clickHandler = (id: number) => {
        getPostsOfUserByUserId(id)
            .then(posts =>{
                setPosts(posts)
            });
    }
    return (
        <div>
            {
                users.map(({id, name, username, email}, index) => <UserComponent
                    key={index}
                    id={id}
                    name={name}
                    username={username}
                    email={email}
                    clickHandler={clickHandler}/>)
            }
            {
                posts.map(({userId, id, title, body}, index) => <UserPostComponent
                    key={index}
                    id={id}
                    title={title}
                    userId={userId}
                    body={body}/>)
            }

        </div>
    );
};

export default UsersComponent;