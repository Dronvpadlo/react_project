import React, {FC, useEffect, useState} from 'react';
import './App.css';
import './components/products-component/productsComponent'
import './modules/IProducts'
import IProducts from "./modules/IProducts";
import ProductComponent from "./components/product-component/productComponent";
import ProductsComponent from "./components/products-component/productsComponent";

const App: FC = () => {

  return (
    <>
        <ProductsComponent/>
    </>
  );
}

export default App;
