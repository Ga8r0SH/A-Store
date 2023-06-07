import React, { useEffect, useState } from 'react';
import Products from "./ProductsAll";
import { ProductsInterface } from '../../services/productsService/products-response.interface';
import { getAllProducts } from '../../services/productsService/productsService';

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<ProductsInterface[]>([]);
        useEffect(()=>{
            getAllProducts()
            .then((data)=>{
                console.log(data);
            })
        },[])

    return (
        <Products
            
        />
    );
}

export default ProductList;