import http from "../http";
import { Product, ProductsInterface, createNewProduct, updateProduct } from "./products-response.interface";

const getAllProducts = async (): Promise<Product[]> => {
    const response = await http.get<ProductsInterface<Product>>("products");
    return response.data.products;
}

const getProdCategory = async (device: string): Promise<Product[]> => {
    const response = await http.get<ProductsInterface<Product>>(`products/category/${device}`);
    return response.data.products;
}

const getSearchProducts = async (query: string): Promise<Product[]> => {
    const responce = await http.get<ProductsInterface<Product>>(`products/search?q=${query}`);
    return responce.data.products;
}

const getProductId = async (id: number): Promise<Product> => {
    const responce = await http.get<Product>(`products/${id}`);
    return responce.data
}

const createNewProducts = async (product: createNewProduct) => {
    const responce = await http.post<Product>(`products/add`, { product });
    return responce;
}

const updateProducts = async (data: updateProduct) => {
    const responce = await http.put<updateProduct>(`products/${data.id}`, { data });
    return responce;

}

const deleteProduct = async (id:number| undefined) => {
    const responce = await http.delete<updateProduct>(`products/${id}`)
    return responce.data;
}

export {
    deleteProduct,
    updateProducts,
    createNewProducts,
    getAllProducts,
    getProdCategory,
    getSearchProducts,
    getProductId
}
