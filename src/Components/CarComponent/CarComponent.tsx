import React, {FC} from 'react';
import {ICars} from "../../Models/ICars";
import styles from './CarComponent.module.css'

const CarComponent:FC<ICars> = ({id, year, brand, price }) => {
    return (
        <div className={styles.mainBlock}>
            <div className={styles.carBlock}>
                ID: {id}<br/>
                Brand: {brand}<br/>
                Year: {year}<br/>
                Price: {price}<br/>
            </div>

        </div>
    );
};

export default CarComponent;