import React from 'react';
import styles from "./CarsPostComponent.module.css";

const CarsPostComponent = () => {
    return (
        <div className={styles.section}>
            <h3 className={styles.h2}>Post Car</h3>
            <form className={styles.form}>
                <input className={styles.input} type="text" placeholder={'Brand'}/>
                <input className={styles.input} type="text" placeholder={'Price'}/>
                <input className={styles.input} type="text" placeholder={'Year'}/>
                <button className={styles.button}>Post Car</button>
            </form>
        </div>
    );
};

export default CarsPostComponent;