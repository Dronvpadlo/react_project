import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    let id = 2;
    return (
        <div>
            <NavLink to={'/home'}>Home</NavLink>
            <NavLink to={'/users'}>Users</NavLink>
            <NavLink to={'/users/' + id + '/posts'}>Users with posts</NavLink>
            <NavLink to={'/posts'}>Posts</ NavLink>
            <NavLink to={'/posts/' + id + '/comments'}>Posts with comments</NavLink>
            <NavLink to={'/comments'}>Comments</NavLink>
            <hr/>
        </div>
    );
};

export default Header;