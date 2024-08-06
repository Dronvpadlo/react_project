import axios from "axios";

const AxiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {}
})

const userService.getUsers = async ()=>{
    await AxiosInstance.get('/users')
}

export {userService}