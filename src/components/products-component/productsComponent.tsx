import React, {useEffect, useState} from 'react';
import IProducts from "../../modules/IProducts";
import ProductComponent from "../product-component/productComponent";

const ProductsComponent = () => {
    const baseUrl = 'https://dummyjson.com'

    const [productsList, setProductsList] = useState<IProducts[]>([])

    useEffect(()=>{
        fetch(baseUrl + '/products')
            .then(res => res.json())
            .then(responce => {
                setProductsList(responce.products)
            })
    }, []);
    return (
        <>
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
        </>
    );
};

export default ProductsComponent;
