import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorLayout from "../Layouts/ErrorLayout";
import HomePage from "../Pages/HomePage/HomePage";
import RegPage from "../Pages/RegPage/RegPage";
import AuthPage from "../Pages/AuthPage/AuthPage";
import CarsPage from "../Pages/CarsPage/CarsPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorLayout/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'reg', element: <RegPage/>},
            {path: 'auth', element: <AuthPage/>},
            {path: 'cars', element: <CarsPage/>}
        ]


    }
]);