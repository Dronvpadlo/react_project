import React, {FC} from 'react';
import './App.css';
import './components/products-component/productsComponent'
import './models/IProducts'
import ProductsComponent from "./components/products-component/productsComponent";

const App: FC = () => {

  return (
    <>
        <ProductsComponent/>
    </>
  );
}

export default App;
