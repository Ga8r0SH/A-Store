
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

export interface ProductCategoryInterface{
    category:string
}