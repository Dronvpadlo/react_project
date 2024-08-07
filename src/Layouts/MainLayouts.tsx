import React, {useEffect, useState} from 'react';
import Header from "../Components/Header";
import {Outlet} from "react-router-dom";
import Footer from "../Components/Footer";
import {MyContext} from "../Context/ContextProvider";
import {IUsersModel} from "../Models/IUsersModel";
import {IPostsModel} from "../Models/IPostsModel";
import {ICommentsModel} from "../Models/ICommentsModel";
import {commentService, postService, userService} from "../Services/api.service";


const MainLayouts = () => {
    const [users, setUsers] = useState<IUsersModel[]>([]);
    const [posts, setPosts] = useState<IPostsModel[]>([]);
    const [comments, setComments] = useState<ICommentsModel[]>([]);

    useEffect(() => {
        userService.getUsers().then(value => setUsers(value.data));
        postService.getPosts().then(value => setPosts(value.data));
        commentService.getComments().then(value => setComments(value.data));
    }, []);

    return (
        <div>
            <MyContext.Provider value={
                {
                    userStore:{
                         allUsers: users
                    },
                    postStore:{
                         allPosts: posts
                    },
                    commentStore:{
                        allComments: comments
                    }

                }
            }>
            <Header/>
            <Outlet/>
            </MyContext.Provider>
            <Footer/>
        </div>
    );
};

export default MainLayouts;