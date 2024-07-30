import React, {FC} from 'react';
import {ICars} from "../../Models/ICars";


const CarComponent:FC<ICars> = ({id, year, brand, price }) => {
    return (
        <div>
            ID: {id}<br/>
            Brand: {brand}<br/>
            Year: {year}<br/>
            Price: {price}
        </div>
    );
};

export default CarComponent;