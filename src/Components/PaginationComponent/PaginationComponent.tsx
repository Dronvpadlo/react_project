import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";
import {IPagePaginated} from "../../Models/ICars";

const PaginationComponent:FC<IPagePaginated> = ({next, prev}) => {

    let [query, setQuery] = useSearchParams({page:'1'});

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
        <div>
            <button
                disabled={!prev} onClick={()=>{
                changePage('prev')
            }}>Prev. Page</button>
            <button
                disabled={!next}
                onClick={()=>{
                changePage('next')
            }}>Next Page
            </button>
        </div>
    );
};

export default PaginationComponent;