import React, {FC, ReactNode} from 'react';
import IProducts from "../../modules/IProducts";

type ProductComponentWithChildren<T> = T & {children?: ReactNode}
const ProductComponent: FC <ProductComponentWithChildren<IProducts>> = (product) => {
    return (
        <div>
            <div>ID: {product.id}</div>
            <div>Title: {product.title}</div>
            <div>Description: {product.description}</div>
            <div>Category: {product.category}</div>
            <div>Price: {product.price}</div>
            <div>Status: {product.availabilityStatus}</div>
            <div>Brand: {product.brand}</div>
            <div>Discount Percentage: {product.discountPercentage}</div>
            <div>
                 {product.images.map((image, index) => (
                 <img key={index} src={image} alt={`Product Image ${index + 1}`}/>
                 ))}
            </div>
            <div>Minimum Order Quantity: {product.minimumOrderQuantity}</div>
            <div>Rating: {product.rating}</div>
            <div>Return Policy: {product.returnPolicy}</div>
            <div>Shipping Information: {product.shippingInformation}</div>
            <div>Sku: {product.sku}</div>
            <div>Stock: {product.stock}</div>
            <div>Tags: {product.tags}</div>
            <div>Thumbnail:
                <img src={product.thumbnail} alt='thumbnail'/>
            </div>
            <div>warrantyInformation={product.warrantyInformation}</div>
            <div>weight={product.weight}</div>
            {product.children}
        </div>
    );
};

export default ProductComponent;