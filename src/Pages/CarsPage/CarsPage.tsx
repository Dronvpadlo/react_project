import React, {useEffect, useState} from 'react';
import {carService} from "../../Services/api.service";
import {AxiosError} from "axios";
import {ICarsPaginated} from "../../Models/ICars";
import CarsComponent from "../../Components/CarsComponent/CarsComponent";


const CarsPage = () => {
    const [carDataObject, setCarDataObject] = useState<ICarsPaginated>({
        items: [],
        next: null,
        prev: null,
        total_items: 0,
        total_pages: 0
    })
    useEffect(() => {
        const getCarsData = async () => {
            try {
                let responce = await carService.getCars();
                if (responce) {
                    setCarDataObject(responce)
                }
            } catch (e) {
                const axiosError = e as AxiosError;
                if (axiosError && axiosError?.response?.status === 401) {
                    console.log(e)
                }
            }
        }
            getCarsData()
    }, []);
    return (
        <div>
            <CarsComponent cars={carDataObject.items}/>
        </div>
    );
};

export default CarsPage;