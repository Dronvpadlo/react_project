import React from 'react';
import HeaderComponent from "../header/HeaderComponent";
import FooterComponent from "../footer/FooterComponent";
import styles from './ErrorLayout.module.css'

const ErrorLayout = () => {
    return (
        <div>
            <HeaderComponent/>
            <div className={styles.div}>
            <img className={styles.img} src="https://img.goodfon.com/original/2561x1440/7/b9/vyveski-sliakot-city-the-city-of-lost-heaven-mafia-hangar-13.jpg" alt="SaintDenis"/>
            </div>
            <FooterComponent/>
        </div>
    );
};

export default ErrorLayout;