import axios from "axios";
import {IReg, IRegResponse} from "../Models/IReg";
import {IAuth, IAuthResponse} from "../Models/IAuth";

let AxiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2'
});

const userService = {
    saveUser: async (data: IReg):Promise<boolean> =>{
        let response = await AxiosInstance.post<IRegResponse>('/users', data)
        return !!response.data.username || false
    }
}

const authService = {
    authUser: async (data: IAuth):Promise<boolean> =>{
        let response = await AxiosInstance.post<IAuthResponse>('/auth', data)
        console.log(response)
        return !!response.data.access || false
    }
}
export {userService, authService}