import React, {useEffect, useState} from 'react';
import {authService, carService} from "../../Services/api.service";
import {AxiosError} from "axios";
import {ICarsPaginated} from "../../Models/ICars";
import CarsComponent from "../../Components/CarsComponent/CarsComponent";
import {useNavigate} from "react-router-dom";


const CarsPage = () => {

    let navigate = useNavigate();


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


                    try {
                        await authService.refresh();
                    } catch (e) {
                        return navigate('/auth');
                    }
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