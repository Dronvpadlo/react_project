import React from 'react';
import RegistrationComponent from "../../Components/RegistrationComponent/RegistrationComponent";
import styles from './RegPage.module.css'
const RegPage = () => {
    return (
        <div className={styles.RegSection}>
            <div  className={styles.FormSection}>
                <RegistrationComponent/>
            </div>
        </div>
    );
};

export default RegPage;