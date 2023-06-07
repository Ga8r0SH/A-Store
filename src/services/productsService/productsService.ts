import http from "../http";
import { ProductsInterface } from "./products-response.interface";

const getAllProducts = async (): Promise<ProductsInterface[]> => {
    const response = await http.get<ProductsInterface[]>("products");
    return response.data;
}

export {
    getAllProducts
}