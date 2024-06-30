
const baseURL = 'https://dummyjson.com'
const getAllUsers = () =>{
    return fetch(baseURL + '/users')
        .then(res => res.json())

}

export {getAllUsers}