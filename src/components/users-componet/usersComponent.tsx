import React, {useEffect, useState} from 'react';
import UserComponent from "../user-component/userComponent";
import {IUser} from "../../models/IUser";
import {getAllUsers, getPostsOFUser} from "../../services/api.service";
import {IPost} from "../../models/IPost";
import PostsComponent from "../posts-component/postsComponent";
import styles from './users.module.css'
const UsersComponent = () => {
    const [usersList, setUsersList] = useState<IUser[]>([]);
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        getAllUsers().then((res) => {
            setUsersList(res.users);
        })
    }, []);
const getPosts = (id: number) =>{
    getPostsOFUser(id).then(posts => setPosts([...posts.posts]));
}
    return (
        <div className={styles.section}>
            <div>
            <div className={styles.flex}>
                {
                    usersList.map((user) => (<UserComponent
                        key={user.id}
                        user={user}
                        getPosts={getPosts}

                    />))
                }

            </div>
            <div>
                <PostsComponent posts={posts}/>
            </div>
            </div>
        </div>
    );
};

export default UsersComponent;