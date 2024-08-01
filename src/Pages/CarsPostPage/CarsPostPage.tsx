import React from 'react';
import styles from './CarsPostPage.module.css'

import CarsPostComponent from "../../Components/CarsPostComponent/CarsPostComponent";
const CarsPostPage = () => {
    return (
        <div className={styles.section}>
            <div className={styles.formSection}>
                <CarsPostComponent/>
            </div>
        </div>
    );
};

export default CarsPostPage;