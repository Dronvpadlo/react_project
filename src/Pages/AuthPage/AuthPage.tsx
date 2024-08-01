import React from 'react';
import AuthComponent from "../../Components/AuthComponent/AuthComponent";
import styles from './AuthPage.module.css'
const AuthPage = () => {
    return (
        <div className={styles.section}>
            <div className={styles.formSection}>
                <AuthComponent/>
            </div>
        </div>
    );
};

export default AuthPage;