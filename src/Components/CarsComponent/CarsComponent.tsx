import React, {FC} from 'react';
import {ICars} from "../../Models/ICars";


interface IProps {
    cars: ICars[]
}
const CarsComponent:FC<IProps> = ({cars}) => {
    return (
        <div>
            {
                cars.map((car, index) =>(
                    <div>{car.brand} {car.price}
                    </div>
                ))
            }
        </div>
    );
};

export default CarsComponent