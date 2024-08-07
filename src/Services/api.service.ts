import axios, {AxiosResponse} from "axios";
import {IUsersModel} from "../Models/IUsersModel";
import {IPostsModel} from "../Models/IPostsModel";
import {ICommentsModel} from "../Models/ICommentsModel";

const AxiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {}
})

const userService = {
    getUsers: async ():Promise<AxiosResponse<IUsersModel[]>> => {
        return await AxiosInstance.get<IUsersModel[]>('/users')
    }
}

const postService = {
    getPosts: async ():Promise<AxiosResponse<IPostsModel[]>> =>{
        return await AxiosInstance.get<IPostsModel[]>('/posts')
    }
}

const commentService = {
    getComments: async ():Promise<AxiosResponse<ICommentsModel[]>> =>{
        return await AxiosInstance.get<ICommentsModel[]>('/comments')
}
}

export {userService, postService, commentService}