import React, {FC, useEffect, useState} from 'react';
import './App.css';
import './components/product-component/productComponent'
import './components/products-component/productsComponent'

const App: FC = () => {
  const baseUrl = 'https://dummyjson.com'

  const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch(baseUrl + '/products')
            .then(res => res.json())
            .then(responce => {
                setProducts(responce.products)
                console.log(responce.products)
    })
      }, []);
  return (
    <>
        {products}
    </>
  );
}

export default App;
