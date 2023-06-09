import { Product } from "../../../services/productsService/products-response.interface";
import { getProdCategory } from "../../../services/productsService/productsService";
import { useEffect, useState } from "react";
import Phonecategory from "./Phonecategory";
import Preloader from "../preloader/Preloader";

type Props = {
    categoryProps: string;
}


const PhonecategoryAPI = ({ categoryProps }: Props) => {
    const [products, setProducts] = useState<Product[]>();
    const [category, setCAtegory] = useState<string>('');
    const [reloading, setReloading] = useState<boolean>(true);

    useEffect(() => {
        setCAtegory(categoryProps);
    }, [categoryProps])
    useEffect(() => {
        setReloading(true)
        if (category) {
            getProdCategory(category)
                .then((data) => {
                    setProducts(data)
                    setReloading(false)
                })
        }
    }, [category])



    return (
        <div>
            {reloading ? <Preloader /> :
                <Phonecategory
                    products={products}
                />}
        </div>
    )
}
export default PhonecategoryAPI;