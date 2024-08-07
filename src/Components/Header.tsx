import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './Header.module.css'

const Header = () => {
    return (
        <div>
            <div className={styles.headerSection}>
            <NavLink className={styles.link} to={'/home'}>Home</NavLink>
            <NavLink className={styles.link} to={'/users'}>Users</NavLink>
            <NavLink className={styles.link} to={'/usersPosts'}>Users with posts</NavLink>
            <NavLink className={styles.link} to={'/posts'}>Posts</NavLink>
            <NavLink className={styles.link} to={'/postsComments'}>Posts with comments</NavLink>
            <NavLink className={styles.link} to={'/comments'}>Comments</NavLink>
            <hr/>
            </div>
        </div>
    );
};

export default Header;