import axios from "axios";
import {urls, baseUrl} from "../constants/urls";

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