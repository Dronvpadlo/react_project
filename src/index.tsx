
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/home/HomePage";
import UsersPage from "./pages/users/UsersPage";
import PostsPage from "./pages/posts/PostsPage";
import CommentsPage from "./pages/comments/CommentsPage";
import ErrorLayout from "./layouts/ErrorLayout";
import React from "react";
import UserPage from "./pages/user/UserPage";



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const browserRouter = createBrowserRouter([
    {path:'/',
        element: <MainLayout/>,
        errorElement: <ErrorLayout/>,
        children:[
            {
                path: 'users',
                element: <UsersPage/>
            },
            {
              path: 'users/:id',
                element: <UserPage/>
            },
            {
                path: 'posts',
                element:<PostsPage/>
            },
            {
                path: 'comments',
                element:<CommentsPage/>
            },
            {
                element: <HomePage/>, index: true
            }
        ]
    },




]);
root.render(
    <RouterProvider router={browserRouter}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
