
const baseUrl = 'https://dummyjson.com'

const products = fetch(baseUrl + '/products')
    .then(res => res.json())
    .then(console.log);

export default {products}