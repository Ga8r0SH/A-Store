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
    const response = await http.get<ProductsInterface<Product>>(`products/search?q=${query}`);
    return response.data.products;
}

const getProductId = async (id: number): Promise<Product> => {
    const response = await http.get<Product>(`products/${id}`);
    return response.data
}

const createNewProducts = async (product: createNewProduct) => {
    const response = await http.post<Product>(`products/add`, { product });
    return response;
}

const updateProducts = async (data: updateProduct) => {
    const response = await http.put<updateProduct>(`products/${data.id}`, { data });
    return response;

}

const deleteProduct = async (id:number| undefined) => {
    const response = await http.delete<updateProduct>(`products/${id}`)
    return response.data;
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
