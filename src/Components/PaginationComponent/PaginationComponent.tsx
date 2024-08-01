import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";
import {IPagePaginated} from "../../Models/ICars";
import styles from './PaginationComponent.module.css'

const PaginationComponent:FC<IPagePaginated> = ({next, prev}) => {

    let [query, setQuery] = useSearchParams({page: '1'});

    const changePage = (page: string) =>{
        switch (page){
            case 'prev':
                setQuery({...prev})
                break
            case 'next':
                setQuery({...next})
                break
        }
    }
    return (
        <div className={styles.section}>
            <button className={styles.button}
                disabled={!prev} onClick={() => {
                changePage('prev')
            }}>Prev. Page
            </button>
            <div className={styles.pageNumber}>{query}</div>
            <button className={styles.button}
                disabled={!next}
                onClick={() => {
                    changePage('next')
                }}>Next Page
            </button>
        </div>
    );
};

export default PaginationComponent;