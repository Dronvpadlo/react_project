import {createBrowserRouter} from "react-router-dom";

import UsersPage from "../Pages/UsersPage";
import PostsPage from "../Pages/PostsPage";
import CommentsPage from "../Pages/CommentsPage";
import MainLayouts from "../Layouts/MainLayouts";
import HomePage from "../Pages/HomePage";
import UsersWithPostsComponent from "../Components/Users/UsersWithPostsComponent";

let id = 2;
const routes = [{
    path: '/', element: <MainLayouts/>, children:[
        {path: 'home', element: <HomePage/>},
        {path: 'users', element: <UsersPage/>},
        {path: 'posts', element: <PostsPage/>},
        {path: 'comments', element: <CommentsPage/>},
        {path: 'users/' + id +'/posts' , element: <UsersWithPostsComponent/>},
        {path: 'posts/' + id +'/comments' , element: <UsersWithPostsComponent/>}
    ]
}]
export const router = createBrowserRouter(routes)