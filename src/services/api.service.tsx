const getAllUsers = ()=>{
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())

}
const getPostsOfUserByUser = (id:number)=>{
    return fetch('https://jsonplaceholder.typicode.com/users/'+id+'/posts')
        .then(value => value.json())

}


export {getAllUsers, getPostsOfUserByUser}