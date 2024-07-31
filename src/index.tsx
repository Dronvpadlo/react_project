import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import HomePage from "./Pages/HomePage/HomePage";
import ErrorLayout from "./Layouts/ErrorLayout";
import RegPage from "./Pages/RegPage/RegPage";
import AuthPage from "./Pages/AuthPage/AuthPage";
import CarsPage from "./Pages/CarsPage/CarsPage";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter([
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
root.render(
    <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
