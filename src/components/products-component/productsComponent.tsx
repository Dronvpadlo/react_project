import React, {useEffect, useState} from 'react';
import IProducts from "../../models/IProducts";
import ProductComponent from "../product-component/productComponent";
import {getProducts} from "../../services/api";
import styles from './products.module.css'

const ProductsComponent = () => {

    const [productsList, setProductsList] = useState<IProducts[]>([])

    useEffect(()=>{
       getProducts().then((res) => {
           console.log(res)
            setProductsList(res.products)
        })
    }, []);
    return (
        <div className={styles.productsBGC}>
            {
                productsList.map((product) => <ProductComponent
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    category={product.category}
                    price={product.price}
                    availabilityStatus={product.availabilityStatus}
                    brand={product.brand}
                    dimensions={product.dimensions}
                    discountPercentage={product.discountPercentage}
                    images={product.images}
                    meta={product.meta}
                    minimumOrderQuantity={product.minimumOrderQuantity}
                    rating={product.rating}
                    returnPolicy={product.returnPolicy}
                    reviews={product.reviews}
                    shippingInformation={product.shippingInformation}
                    sku={product.sku}
                    stock={product.stock}
                    tags={product.tags}
                    thumbnail={product.thumbnail}
                    warrantyInformation={product.warrantyInformation}
                    weight={product.weight}/>)
            }
        </div>
    );
};

export default ProductsComponent;
