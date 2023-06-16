import { Product, createNewProduct, updateProduct } from "../../../services/productsService/products-response.interface";
import { deleteProduct, updateProducts } from "../../../services/productsService/productsService";
import ModalWindowDel from "../modalWindow/ModalWindowDel";
import ModalWindowUpl from "../modalWindow/ModalWindowUpl";
import { useState } from 'react';

type Props = {
    descprod: Product | undefined;
}

const DescriptionProduct = ({ descprod }: Props) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setUpdateProduct((prevFormData) => ({
            ...prevFormData,
            [name]: prevFormData ? value : '',
        }));
    };

    const [updateProduct, setUpdateProduct] = useState<updateProduct>({
        id: descprod?.id,
        title: descprod?.title,
        price: descprod?.price,
        description: descprod?.description,
        thumbnail: descprod?.thumbnail,
        rating: descprod?.rating
    });

    const onUpdateProduct = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        updateProducts(updateProduct)
            .then(response => {
                console.log(response)
            })
    }
// Удаление элемента по ID
    const onDeleteProduct = (id: number | undefined) => {
        if (id) {
            deleteProduct(id)
                .then(data => {
                    console.log(data)
                })
        }
    }

    return (
        <div>
            <ModalWindowUpl
                updateProduct={updateProduct}
                onUpdateProduct={onUpdateProduct}
                setUpdateProduct={setUpdateProduct}
                handleInputChange={handleInputChange}

            />
            <ModalWindowDel
                onDeleteProduct={onDeleteProduct}
                descprod={descprod}
            />
            <div className="container max-w-[1200px] mx-auto my-0 px-[30px] mb-10">
                <div className="descProduct flex justify-center flex-wrap mt-10 bg-gray-200 py-5 rounded-[10px]">
                    <div className="imagesProduct">
                        <div className="image">
                            <img className="rounded-[10px]" src={descprod?.thumbnail} alt="product" />
                        </div>
                    </div>
                    <div className="specifications ml-[100px] ">
                        <div className="title">
                            <h1 className="text-[25px] mb-7 font-semibold">{descprod?.title}</h1>
                        </div>
                        <div className="price mb-7">
                            <h2 className="max-w-[360px]">{descprod?.description}</h2>
                        </div>
                        <div className="descriptions">
                            <div className="text-[25px] font-bold">{descprod?.price}$</div>
                        </div>
                        <div className="flex mt-7">
                            <div>
                                <div className="mr-3">
                                    <div className="text-[20px]">Rating: {descprod?.rating}</div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            </div>
                        </div>
                        <div className="button mt-3">
                            <a
                                className="inline-flex items-center justify-center rounded-md border border-black py-4 px-10 text-center text-base text-black transition hover:border-black hover:bg-black hover:text-white lg:px-8 xl:px-10"
                            >
                                Add to card
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DescriptionProduct;


