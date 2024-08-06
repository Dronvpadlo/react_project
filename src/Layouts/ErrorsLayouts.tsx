import React from 'react';
import Header from "../Components/Header";
import {Outlet} from "react-router-dom";
import Footer from "../Components/Footer";

const ErrorsLayouts = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default ErrorsLayouts;