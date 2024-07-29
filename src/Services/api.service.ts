import axios from "axios";
import {IReg, IRegResponse} from "../Models/IReg";
import {IAuth, IAuthResponse} from "../Models/IAuth";
import {getLocalStorageData} from '../Utility/Utility'

let AxiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2'
});

AxiosInstance.interceptors.request.use(interceptorRequest =>{

    if (localStorage.getItem('tokenPair') && interceptorRequest.url !== '/auth'){
        interceptorRequest.headers.set('Authorization', getLocalStorageData<IAuthResponse>('tokenPair').access)
    }

    return interceptorRequest;
})

const userService = {
    saveUser: async (data: IReg):Promise<boolean> =>{
        let response = await AxiosInstance.post<IRegResponse>('/users', data)
        return !!response.data.username || false
    }
}

const authService = {
    authUser: async (data: IAuth):Promise<void> =>{
        let response = await AxiosInstance.post<IAuthResponse>('/auth', data)
        console.log(response.data.access)
        localStorage.setItem('tokenPair', JSON.stringify(response.data))

    }
}
const carService = {
    getCars: async () => {
        let response = await AxiosInstance.get('/cars');
        console.log(response)
    }
}
export {userService, authService, carService}