

const getAllUsers = () =>{
    return fetch('https://dummyjson.com/users')
        .then(res => res.json())

}

export {getAllUsers}