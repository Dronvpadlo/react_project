import React from 'react';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import styles from './ErrorLayout.module.css'
import {NavLink} from "react-router-dom";

const ErrorLayout = () => {
    return (
        <div>
            <Header/>
            <div className={styles.errorSection}>
                <div className={styles.errorNav}>
                    <h3>Sorry, but page not found.<br/>
                    Maybe you searching something of this:</h3>
                    <NavLink className={styles.linksStyle} to={'/reg'}>Sing In</NavLink><br/>
                    <NavLink className={styles.linksStyle} to={'/auth'}>Log In</NavLink><br/>
                    <NavLink className={styles.linksStyle} to={'/cars'}>Cars List</NavLink><br/>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ErrorLayout;