import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <NavLink to={'/home'}>Home</NavLink><br/>
            <NavLink to={'/reg'}>Sing In</NavLink><br/>
            <NavLink to={'/auth'}>Log In</NavLink><br/>
            <NavLink to={'/cars'}>Cars List</NavLink><br/>

        </div>
    );
};

export default Header;