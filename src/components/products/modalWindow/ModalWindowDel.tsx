import React, { useState } from 'react';
import { Product } from '../../../services/productsService/products-response.interface';


type Props = {
    descprod: Product | undefined;
    onDeleteProduct: (id: number | undefined) => void;
}



const ModalWindowDel = ({ descprod, onDeleteProduct }: Props) => {



    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <button
                id="openModal"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded fixed ml-5 mt-[125px]"
                onClick={openModal}
            >
                Delete
            </button>

            {isModalOpen && (
                <div
                    id="modal"
                    className="fixed inset-0 flex items-center justify-center z-50"
                >
                    <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
                    <div className="modal-container bg-white w-11/12 md:max-w-md h-auto mx-auto rounded shadow-lg z-50 overflow-y-auto">
                        <div className="modal-content py-4 text-left px-6">
                            <div className="flex justify-between items-center pb-3">
                                <p className="text-2xl font-bold">Adding a product</p>
                                <button
                                    id="closeModal"
                                    className="modal-close cursor-pointer z-50"
                                    onClick={closeModal}
                                >
                                    <svg
                                        className="fill-current text-black"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                    >
                                        <path d="M18 1.5l-1.5-1.5-7.5 7.5-7.5-7.5-1.5 1.5 7.5 7.5-7.5 7.5 1.5 1.5 7.5-7.5 7.5 7.5 1.5-1.5-7.5-7.5z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="content flex justify-center">

                                <button onClick={() => onDeleteProduct(descprod?.id)} className='bg-green-400 py-2 px-3 rounded hover:bg-green-600 text-white font-bold'>Yes</button>
                                <button className='bg-red-400 py-2 px-3 ml-10 rounded hover:bg-red-600 text-white font-bold'>No</button>

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalWindowDel;