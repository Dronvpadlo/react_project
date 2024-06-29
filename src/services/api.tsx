

const baseUrl: string = 'https://dummyjson.com'

const getProducts = () =>{
    return fetch(baseUrl + '/products')
        .then(res => res.json())

}
export {getProducts}