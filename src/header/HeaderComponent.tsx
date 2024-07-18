import React, {memo} from 'react';
import {NavLink} from "react-router-dom";
import styles from './Header.module.css'

const HeaderComponent = memo(() => {
    return (
        <div className={styles.header}>
            <NavLink className={styles.font} to={'/'}>Home</NavLink>
            <NavLink className={styles.font} to={'users'}>Users</NavLink>
            <NavLink className={styles.font} to={'posts'}>Posts</NavLink>
            <NavLink className={styles.font} to={'comments'}>Comments</NavLink>
        </div>
    );
});

export default HeaderComponent;