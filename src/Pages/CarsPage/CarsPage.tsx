import React, {useEffect, useState} from 'react';
import {authService, carService} from "../../Services/api.service";
import {AxiosError} from "axios";
import {ICarsPaginated} from "../../Models/ICars";
import CarsComponent from "../../Components/CarsComponent/CarsComponent";
import {useNavigate, useSearchParams} from "react-router-dom";
import PaginationComponent from "../../Components/PaginationComponent/PaginationComponent";
import styles from './CarsPage.module.css'


const CarsPage = () => {

    let navigate = useNavigate();
    let [query] = useSearchParams();

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
                let responce = await carService.getCars(query.get('page')||'1');
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
    }, [query]);
    return (
        <div className={styles.pageSection}>
            <div className={styles.carsBlock}> <CarsComponent cars={carDataObject.items}/>
            </div>
            <div className={styles.buttonsBlock}> <PaginationComponent next={carDataObject.next} prev={carDataObject.prev}/>
            </div>
        </div>
    );
};

export default CarsPage;