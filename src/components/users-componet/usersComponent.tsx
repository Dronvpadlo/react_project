import React, {useEffect, useState} from 'react';
import UserComponent from "../user-component/userComponent";
import {IUser} from "../../models/IUser";
import {getAllUsers, getPostsOFUser} from "../../services/api.service";
import {IPost} from "../../models/IPost";
import PostsComponent from "../posts-component/postsComponent";

const UsersComponent = () => {
    const [usersList, setUsersList] = useState<IUser[]>([]);
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        getAllUsers().then((res) => {
            setUsersList(res.users);
        })
    }, []);
const getPosts = (id: number) =>{
    getPostsOFUser(id).then(posts => setPosts(posts));
}
    return (
        <div>
            <hr/>
            <div>
                {
                    usersList.map((user) => (<UserComponent
                        key={user.id}
                        user={user}
                        getPosts={getPosts}

                        />))
                }
            </div>
            <hr/>
            <div>
                <PostsComponent posts={posts}/>
            </div>
        </div>
    );
};

export default UsersComponent;