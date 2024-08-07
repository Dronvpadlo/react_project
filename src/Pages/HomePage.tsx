import React from 'react';
import {NavLink} from "react-router-dom";

const HomePage = () => {
    let id = 2;
    return (
        <div>
            Welcome<br/>
            <NavLink to={'/home'}>Home</NavLink><br/>
            <NavLink to={'/users'}>Users</NavLink><br/>
            <NavLink to={'/users/' + id + '/posts'}>Users with posts</NavLink><br/>
            <NavLink to={'/posts'}>Posts</ NavLink><br/>
            <NavLink to={'/posts/' + id + '/comments'}>Posts with comments</NavLink><br/>
            <NavLink to={'/comments'}>Comments</NavLink><br/>
        </div>
    );
};

export default HomePage;