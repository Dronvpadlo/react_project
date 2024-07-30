import React, {FC} from 'react';
import {ICars} from "../../Models/ICars";
import CarComponent from "../CarComponent/CarComponent";


interface IProps {
    cars: ICars[]
}
const CarsComponent:FC<IProps> = ({cars}) => {
    return (
        <div>
            {
                cars.map(({brand, price, id, year}, index) => <CarComponent key={index} id={id} brand={brand} price={price} year={year}/>

                )}
        </div>
    );
};

export default CarsComponent