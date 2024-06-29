

const baseUrl: string = 'https://dummyjson.com'

const getProducts = () =>{
    return fetch(baseUrl + '/products?limit=200')
        .then(res => res.json())

}
export {getProducts}