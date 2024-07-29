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
                cars.map((car, index) =>(
                    <CarComponent cars={cars}/>
                ))
            }
        </div>
    );
};

export default CarsComponent