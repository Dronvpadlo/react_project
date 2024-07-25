import axios from "axios";
import {IReg, IRegResponce} from "../Models/IReg";

let AxiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2'
});

const userService = {
    saveUser: async (data: IReg):Promise<boolean> =>{
        let responce = await AxiosInstance.post<IRegResponce>('/users', data)
        return !!responce.data.username || false
    }
}
export {userService}