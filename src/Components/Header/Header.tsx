import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.bgc}>
            <NavLink className={styles.inputStyle} to={'/reg'}>Sing In</NavLink><br/>
            <NavLink className={styles.inputStyle} to={'/auth'}>Log In</NavLink><br/>
            <NavLink className={styles.inputStyle} to={'/cars'}>Cars List</NavLink><br/>

        </div>
    );
};

export default Header;