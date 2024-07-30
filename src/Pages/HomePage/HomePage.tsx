import React from 'react';
import styles from './HomePage.module.css'
import {NavLink} from "react-router-dom";
const HomePage = () => {
    return (
        <div className={styles.homeSection}>
            <div className={styles.homeNav}>
                <h3>Welcome!!!</h3>
                <NavLink className={styles.linksStyle} to={'/home'}>Home</NavLink><br/>
                <NavLink className={styles.linksStyle} to={'/reg'}>Sing In</NavLink><br/>
                <NavLink className={styles.linksStyle} to={'/auth'}>Log In</NavLink><br/>
                <NavLink className={styles.linksStyle} to={'/cars'}>Cars List</NavLink><br/>
            </div>
        </div>
    );
};

export default HomePage;