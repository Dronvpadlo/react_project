import React, {useEffect} from 'react';
import Header from "../Components/Header";
import {Outlet} from "react-router-dom";
import Footer from "../Components/Footer";
import {useStore} from "../Context/store";
import {commentService, postService, userService} from "../Services/api.service";


const MainLayouts = () => {

   const {userSlice, userSlice:{favoriteUser}, postSlice, commentSlice} = useStore();
    useEffect(() => {
        userService.getUsers().then(value => userSlice.loadUsers(value.data));
        postService.getPosts().then(value => postSlice.loadPosts(value.data));
        commentService.getComments().then(value => commentSlice.loadComments(value.data))
    }, []);
    return (
        <div>
                <Header/>
                <Outlet/>
                <Footer/>

            <hr/>
            {
                favoriteUser && <div>{favoriteUser.username}</div>
            }
            <hr/>
        </div>
    );
};

export default MainLayouts;