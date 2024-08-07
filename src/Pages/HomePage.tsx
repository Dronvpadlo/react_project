import React from 'react';
import {NavLink} from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            Welcome<br/>
            <NavLink to={'/users'}>Users</NavLink><br/>
            <NavLink to={'/usersPosts'}>Users with posts</NavLink><br/>
            <NavLink to={'/posts'}>Posts</ NavLink><br/>
            <NavLink to={'/postsComments'}>Posts with comments</NavLink><br/>
            <NavLink to={'/comments'}>Comments</NavLink><br/>
        </div>
    );
};

export default HomePage;