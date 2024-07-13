import React from 'react';
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <NavLink to={'/'}>Home</NavLink><br/>
            <NavLink to={'users'}>Users</NavLink><br/>
            <NavLink to={'posts'}>Posts</NavLink><br/>
            <NavLink to={'comments'}>Comments</NavLink>
            <hr/>
        </div>
    );
};

export default HeaderComponent;