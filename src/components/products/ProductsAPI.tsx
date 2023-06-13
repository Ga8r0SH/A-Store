import { useEffect, useState } from 'react';
import ProductsAll from "./ProductsAll";
import { Product } from '../../services/productsService/products-response.interface';
import { getAllProducts } from '../../services/productsService/productsService';



const ProductList = () => {
    const [products, setProducts] = useState<Product[]>();

    useEffect(() => {
        getAllProducts()
            .then((data) => {
                setProducts(data)
            })
    }, [])

    return (
        <div>
            <ProductsAll
                products={products}
            />
        </div>


    );
}

export default ProductList;