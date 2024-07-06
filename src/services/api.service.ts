import axios from "axios";
import {urls, baseUrl} from "../constants/urls";
import {IUser} from "../models/IUser";

let axiosInstance =  axios.create({
    baseURL: baseUrl,
    headers: {}
});

const userService = {
    getAll: async () =>{
         let axiosResponce = await axiosInstance.get(urls.usersUrl.all);

         return axiosResponce.data
    },
}

export {userService}