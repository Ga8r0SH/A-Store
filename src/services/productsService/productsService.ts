import http from "../http";
import { Product,ProductsInterface } from "./products-response.interface";

const getAllProducts = async (): Promise<Product[]> => {
    const response = await http.get<ProductsInterface<Product>>("products");
    return response.data.products;
}

const getProdCategory = async (device: string): Promise<Product[]> => {
    const response = await http.get<ProductsInterface<Product>>(`products/category/${device}`);
    return response.data.products;
}

const getSearchProducts = async (query:string) : Promise<Product[]> => {
    const responce = await http.get<ProductsInterface<Product>>(`products/search?q=${query}`);
    return responce.data.products;
}

const getProductId  = async(id:number) : Promise<Product> =>{
    const responce = await http.get<Product>(`products/${id}`);
    return responce.data
}


export {
    getAllProducts,
    getProdCategory,
    getSearchProducts,
    getProductId
}
