import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <NavLink to={'/home'}>Home</NavLink>
            <NavLink to={'/users'}>Users</NavLink>
            <NavLink to={'/usersPosts'}>Users with posts</NavLink>
            <NavLink to={'/posts'}>Posts</ NavLink>
            <NavLink to={'/postsComments'}>Posts with comments</NavLink>
            <NavLink to={'/comments'}>Comments</NavLink>
            <hr/>
        </div>
    );
};

export default Header;