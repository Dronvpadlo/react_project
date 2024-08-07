import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.headerSection}>
            <NavLink className={styles.link} to={'/home'}>Home</NavLink><br/>
            <NavLink className={styles.link} to={'/users'}>Users</NavLink><br/>
            <NavLink className={styles.link} to={'/usersPosts'}>Users with posts</NavLink><br/>
            <NavLink className={styles.link} to={'/posts'}>Posts</NavLink><br/>
            <NavLink className={styles.link} to={'/postsComments'}>Posts with comments</NavLink><br/>
            <NavLink className={styles.link} to={'/comments'}>Comments</NavLink><br/>
            <hr/>
        </div>
    );
};

export default Header;