import axios from "axios";
import {IReg, IRegResponse} from "../Models/IReg";
import {IAuth, IAuthResponse} from "../Models/IAuth";
import {getLocalStorageData} from '../Utility/Utility'
import {ICarsPaginated} from "../Models/ICars";
import {useNavigate} from "react-router-dom";
import {log} from "node:util";


let AxiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2'
});

AxiosInstance.interceptors.request.use(interceptorRequest =>{

    if (localStorage.getItem('tokenPair') && (interceptorRequest.url !== '/auth' && interceptorRequest.url !== '/auth/refresh')){
        interceptorRequest.headers.set('Authorization', 'Bearer ' + getLocalStorageData<IAuthResponse>('tokenPair').access)
    }


    return interceptorRequest;
})

const userService = {
    saveUser: async (data: IReg):Promise<boolean> =>{
        const response = await AxiosInstance.post<IRegResponse>('/users', data)
        return !!response.data.username || false
    }
}

const authService = {
    authUser: async (data: IAuth):Promise<void> =>{
        const response = await AxiosInstance.post<IAuthResponse>('/auth', data)
        localStorage.setItem('tokenPair', JSON.stringify(response.data))
    },
    refresh: async  (): Promise<void> =>{
        const refreshToken = getLocalStorageData<IAuthResponse>('tokenPair').refresh;
        const response = await AxiosInstance.post<IAuthResponse>('/auth/refresh', {refresh: refreshToken});
        localStorage.setItem('tokenPair', JSON.stringify(response.data));
        console.log('refresh');
    }
}
const carService = {

    getCars: async (page: string = '1'): Promise<ICarsPaginated> => {
        let response = await AxiosInstance.get<ICarsPaginated>('/cars', {params: {page: page}});
        let carsArr = response.data
        return carsArr;

    }
}
export {userService, authService, carService}