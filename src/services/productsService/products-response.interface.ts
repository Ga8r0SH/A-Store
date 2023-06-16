
export interface ProductsInterface<Product>{
    limit:number
    products:Product[]
    skip:number
    total:number
}


export interface Product {
    id:number,
    title:string,
    description:string,
    price:number,
    stock:number,
    images:string[]
    thumbnail:string,
    category:string,
    rating:number
};

export interface createNewProduct{
    title:string,
    price:number,
    description:string,
    thumbnail:string,
    rating:number
}

export interface updateProduct{
    id:number | undefined,
    title:string | undefined,
    price:number | undefined,
    description:string | undefined,
    thumbnail:string | undefined,
    rating:number | undefined
}

    

export interface ProductCategoryInterface{
    category:string
}