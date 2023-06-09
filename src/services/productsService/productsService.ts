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

const getSearchProducts = async () : Promise<Product[]> => {
    const responce = await http.get<ProductsInterface<Product>>("search?q=title");
    return responce.data.products;
}
export {
    getAllProducts,
    getProdCategory,
    getSearchProducts
}
