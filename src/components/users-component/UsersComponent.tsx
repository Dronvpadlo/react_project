import React, {useEffect, useState} from "react";
import UserComponent from "../user-component/UserComponent";
import {IUser} from "../../models/IUser";
import {getAllUsers, getPostsOfUserByUser} from "../../services/api.service";
import {IPost} from "../../models/IPost";
import PostsComponent from "../posts-component/postsComponent";


const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(()=>{
        getAllUsers().then((value:IUser[]) => {
            setUsers(value)
        });
    }, [])


    const getPosts = (id: number) =>{
        getPostsOfUserByUser(id).then(posts=> console.log(posts));
    }
return (
    <div>
        <div>{
            users.map((user) => <UserComponent key={user.id} user={user} getPosts={getPosts}/>)
        }
        </div>
        <hr/>
        <div>
            <PostsComponent posts={posts}/>
        </div>
    </div>
);
}
export default UsersComponent;