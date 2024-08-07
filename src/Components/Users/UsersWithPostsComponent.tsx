import React, {useEffect, useMemo, useState} from 'react';
import UserWithPostsComponent from "./UserWithPostsComponent";
import {UserWithPostsType} from "../../Models/UserWithPostsType";
import {useStore} from "../../Context/store";


const UsersWithPostsComponent = () => {

    const {userSlice:{allUsers}, postSlice:{allPosts}} = useStore();
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