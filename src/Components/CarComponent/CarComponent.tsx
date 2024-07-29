import React, {FC} from 'react';
import {ICars} from "../../Models/ICars";

interface IProps {
    cars: ICars[]
}
const CarComponent:FC<IProps> = ({cars}) => {
    return (
        <div>

        </div>
    );
};

export default CarComponent