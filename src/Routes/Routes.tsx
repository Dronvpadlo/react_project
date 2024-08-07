import {createBrowserRouter} from "react-router-dom";

import UsersPage from "../Pages/UsersPage";
import PostsPage from "../Pages/PostsPage";
import CommentsPage from "../Pages/CommentsPage";
import MainLayouts from "../Layouts/MainLayouts";
import HomePage from "../Pages/HomePage";
import UserWithPostsComponent from "../Components/Users/UserWithPostsComponent";

let id = 2;
const routes = [{
    path: '/', element: <MainLayouts/>, children:[
        {path: 'home', element: <HomePage/>},
        {path: 'users', element: <UsersPage/>},
        {path: 'posts', element: <PostsPage/>},
        {path: 'comments', element: <CommentsPage/>},
        {path: 'users/' + id +'/posts' , element: <UserWithPostsComponent/>},
        {path: 'posts/' + id +'/comments' , element: <UserWithPostsComponent/>}
    ]
}]
export const router = createBrowserRouter(routes)