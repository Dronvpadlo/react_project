import axios from "axios";
import {IReg, IRegResponse} from "../Models/IReg";

let AxiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2'
});

const userService = {
    saveUser: async (data: IReg):Promise<boolean> =>{
        let response = await AxiosInstance.post<IRegResponse>('/users', data)
        return !!response.data.username || false
    }
}
export {userService}