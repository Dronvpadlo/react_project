import React from 'react';
import AuthComponent from "../../Components/AuthComponent/AuthComponent";
import styles from './AuthPage.module.css'
const AuthPage = () => {
    return (
        <div className={styles.AuthSection}>
            <div className={styles.FormSection}>
                <AuthComponent/>
            </div>
        </div>
    );
};

export default AuthPage;