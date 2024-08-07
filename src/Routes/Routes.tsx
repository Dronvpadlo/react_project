import {createBrowserRouter} from "react-router-dom";

import UsersPage from "../Pages/UsersPage";
import PostsPage from "../Pages/PostsPage";
import CommentsPage from "../Pages/CommentsPage";
import MainLayouts from "../Layouts/MainLayouts";
import HomePage from "../Pages/HomePage";
import UsersWithPostsComponent from "../Components/Users/UsersWithPostsComponent";
import PostsWithCommentsComponent from "../Components/Posts/PostsWithCommentsComponent";

const routes = [{
    path: '/', element: <MainLayouts/>, children:[
        {path: 'home', element: <HomePage/>},
        {path: 'users', element: <UsersPage/>},
        {path: 'posts', element: <PostsPage/>},
        {path: 'comments', element: <CommentsPage/>},
        {path: 'usersPosts' , element: <UsersWithPostsComponent/>},
        {path: 'postsComments' , element: <PostsWithCommentsComponent/>}
    ]
}]
export const router = createBrowserRouter(routes)