import React, {FC} from 'react';
import {ICars} from "../../Models/ICars";
import CarComponent from "../CarComponent/CarComponent";
import styles from './CarsComponent.module.css'

interface IProps {
    cars: ICars[]
}
const CarsComponent:FC<IProps> = ({cars}) => {
    return (
        <div className={styles.mainSection}>

            {
                cars.map(({brand, price, id, year}, index) => <CarComponent key={index} id={id} brand={brand}
                                                                            price={price} year={year}/>
                )}
            <button className={styles.button}>Prev</button>
            <button className={styles.button}>Next</button>
        </div>

    );
};

export default CarsComponent