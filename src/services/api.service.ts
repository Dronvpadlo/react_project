
const baseURL = 'https://dummyjson.com'
const getAllUsers = () =>{
    return fetch(baseURL + '/users')
        .then(res => res.json())

}
const getPostsOFUser = (id: number) =>{
    return fetch(baseURL + '/posts/user/'+id)
        .then(res => res.json())

}

export {getAllUsers, getPostsOFUser}