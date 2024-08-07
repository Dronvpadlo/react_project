import React, {useEffect} from 'react';
import Header from "../Components/Header";
import {Outlet} from "react-router-dom";
import Footer from "../Components/Footer";
import {useStore} from "../Context/store";
import {userService} from "../Services/api.service";


const MainLayouts = () => {

   const {userSlice, userSlice:{favoriteUser}} = useStore();
    useEffect(() => {
        userService.getUsers().then(value => userSlice.loadUsers(value.data));
    }, []);
    return (
        <div>
                <Header/>
                <Outlet/>
                <Footer/>

            <hr/>
            {
                favoriteUser && <div>{favoriteUser.username}</div>
            }
            <hr/>
        </div>
    );
};

export default MainLayouts;