import React from 'react';
import HeaderComponent from "../header/HeaderComponent";
import FooterComponent from "../footer/FooterComponent";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <div><HeaderComponent/></div>
            <div><Outlet/></div>
            <div><FooterComponent/></div>
        </div>
    );
};

export default MainLayout;