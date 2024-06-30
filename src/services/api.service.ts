import {IUser} from "../models/IUser";

const getAllUsers = () =>{
    fetch('https://dummyjson.com/users')
        .then(res => res.json())

}

export {getAllUsers}