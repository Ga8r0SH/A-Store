import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import DescriptionProduct from "./DescriptionProduct";
import Preloader from "../../navProduct/preloader/Preloader";
import { getProductId } from "../../../services/productsService/productsService";
import { Product } from "../../../services/productsService/products-response.interface";



const DescriptionProductAPI = () => {

    const [descprod, setdescProd] = useState<Product>();
    const [reloading, setReloading] = useState<boolean>(true);
    const { id } = useParams();

    useEffect(() => {
        setReloading(true)
        if (id) {
            getProductId(parseInt(id))
                .then((data) => {
                    setdescProd(data)
                    setReloading(false)
                })
        }
    }, [])


    return (
        <div>
            {reloading ? <Preloader /> :
                <DescriptionProduct
                    descprod={descprod}
                />}
        </div>
    )
}


export default DescriptionProductAPI;



