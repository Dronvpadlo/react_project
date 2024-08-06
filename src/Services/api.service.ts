import axios from "axios";
import {IUsersModel} from "../Models/IUsersModel";
import {IPostsModel} from "../Models/IPostsModel";
import {ICommentsModel} from "../Models/ICommentsModel";

const AxiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {}
})

const userService = {
    getUsers: async (): Promise<IUsersModel[]> => {
        return await AxiosInstance.get('/users')
    }
}

const postService = {
    getPosts: async ():Promise<IPostsModel[]> =>{
        return await AxiosInstance.get('/posts')
    }
}

const commentService = {
    getComments: async ():Promise<ICommentsModel[]> =>{
        return await AxiosInstance.get('/comments')
}
}

export {userService, postService, commentService}