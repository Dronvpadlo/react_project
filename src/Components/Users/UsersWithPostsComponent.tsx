import React, {useEffect, useMemo, useState} from 'react';
import {useContextProvider} from "../../Context/Store";
import UserWithPostsComponent from "./UserWithPostsComponent";
import {UserWithPostsType} from "../../Models/UserWithPostsType";


const UsersWithPostsComponent = () => {

    const {userStore: {allUsers}, postStore:{allPosts}} = useContextProvider()
    const [userWithPostsState, setUserWithPostsState] = useState<UserWithPostsType[]>([])

    const usersWithPostsArray = useMemo(() =>{
        return allUsers.map(user =>{
            return {...user, posts: allPosts.filter(post => post.userId === user.id)}
        })
    }, [allUsers, allPosts]);
    useEffect(() => {
        setUserWithPostsState(usersWithPostsArray)
    }, [usersWithPostsArray]);

    return (
        <div>
            <UserWithPostsComponent items={userWithPostsState}/>
        </div>
    );
};

export default UsersWithPostsComponent;