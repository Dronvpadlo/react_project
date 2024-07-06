import axios from "axios";
import {urls, baseUrl} from "../constants/urls";

let axiosInstance =  axios.create({
    baseURL: baseUrl,
    headers: {}
});

const userService = {
    getAllUsers: async () =>{
         let axiosResponce = await axiosInstance.get(urls.usersUrl.all);

         return axiosResponce.data
    },
}
const postService = {
    getAllPosts: async () =>{
        let axiosResponce = await axiosInstance.get(urls.usersUrl.withPosts(1));

        return axiosResponce.data
    },
}

export {userService}