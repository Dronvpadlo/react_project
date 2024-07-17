import React from 'react';
import UsersComponent from "../../components/Users/UsersComponent/UsersComponent";
import styles from './UsersPage.module.css'

const UsersPage = () => {
    return (
        <div className={styles.bgc}>
            <UsersComponent/>
        </div>
    );
};

export default UsersPage;