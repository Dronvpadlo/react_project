import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers:{
        'Content-Type': "application/json",
    }
});
const getAllUsers = async ()=>{
    return await axiosInstance.get('/users').then((response) =>{
        return response.data;
    })
}
const getPostsOFUser = async (id: number)=> {
    return await axiosInstance.get('/posts/user/' + id).then((response) => {
        return response.data;
    })
}
export {getAllUsers, getPostsOFUser}