import { Product } from "../../services/productsService/products-response.interface";
import { getSearchProducts } from "../../services/productsService/productsService";
import Header from "./Header"
import{useState , useEffect} from 'react';

const HeaderAPI = () => {
 
const [search, setSearch] = useState<Product[]>();

    useEffect(()=>{
        getSearchProducts()
        .then((data)=>{
            setSearch(data)
        })

    },[])

    return (
        <Header/>
    )
}
export default HeaderAPI;