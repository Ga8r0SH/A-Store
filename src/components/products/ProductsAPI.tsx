import { useEffect, useState } from 'react';
import ProductsAll from "./ProductsAll";
import { Product, createNewProduct } from '../../services/productsService/products-response.interface';
import { createNewProducts, getAllProducts } from '../../services/productsService/productsService';



const ProductList = () => {
    const [products, setProducts] = useState<Product[]>();
    const [addProduct, setAddProduct] = useState<createNewProduct>({
        title: "",
        price: 0,
        description: "",
        thumbnail: "",
        rating: 0
    });

    const onAddProduct = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createNewProducts(addProduct)
        .then(response => {
            console.log(response)
        })
    }

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
                addProduct={addProduct}
                setAddProduct={setAddProduct}
                onAddProduct={onAddProduct}
            />
        </div>


    );
}

export default ProductList;