const baseUrl = 'https://jsonplaceholder.typicode.com'
const getAllUsers = async ()=>{
    return await fetch(baseUrl+'/users')
        .then(value => value.json())

}
const getPostsOfUserByUser = async (id:number): Promise<any>=>{
    return await fetch(baseUrl + '/users/' + id + '/posts')
        .then(value => value.json())

}


export {getAllUsers, getPostsOfUserByUser}