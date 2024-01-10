import { createNewProduct } from "../../../services/productsService/products-response.interface";

type Props = {
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void,
    addProduct: createNewProduct,
    onAddProduct:(e:React.FormEvent<HTMLFormElement>) => void;
}

const Modal = ({ handleInputChange , addProduct , onAddProduct}: Props) => {
    const openModalButton = document.getElementById('openModal');
    const closeModalButton = document.getElementById('closeModal');
    const modal = document.getElementById('modal');

    if (openModalButton && closeModalButton && modal) {
        openModalButton.addEventListener('click', () => {
            modal.classList.remove('hidden');
        });

        closeModalButton.addEventListener('click', () => {
            modal.classList.add('hidden');
        });
    }
    return (
        <div className="">
            <button id="openModal" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded fixed ml-5">
                Add
            </button>

            <div id="modal" className="fixed inset-0 flex items-center justify-center z-50 hidden">
                <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
                <div className="modal-container bg-white w-11/12 md:max-w-md h-auto mx-auto rounded shadow-lg z-50 overflow-y-auto">
                    <div className="modal-content py-4 text-left px-6">
                        <div className="flex justify-between items-center pb-3">
                            <p className="text-2xl font-bold">Adding a product</p>
                            <button id="closeModal" className="modal-close cursor-pointer z-50">
                                <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                    <path
                                        d="M18 1.5l-1.5-1.5-7.5 7.5-7.5-7.5-1.5 1.5 7.5 7.5-7.5 7.5 1.5 1.5 7.5-7.5 7.5 7.5 1.5-1.5-7.5-7.5z"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="content">
                            <form action="" className="" onSubmit={onAddProduct}>
                                <div className="wrapper flex justify-between">
                                    <div className="box1">
                                        <h3>Name</h3>
                                        <input value={addProduct.title } onChange={handleInputChange} name="title" type="text" placeholder="Name" className="border-2 p-1 rounded-[5px] mb-3 focus:outline-none" />
                                        <h3>Rating</h3>
                                        <input value={addProduct.rating} onChange={handleInputChange} name="rating" type="number" placeholder="Rating" className="border-2 rounded-[5px] p-1 focus:outline-none" />
                                    </div>
                                    <div className="box2">
                                        <h3>Price$</h3>
                                        <input value={addProduct.price } onChange={handleInputChange} name="price" type="number" placeholder="Price" className="border-2 rounded-[5px] p-1 mb-3 focus:outline-none" />
                                        <h3>Images</h3>
                                        <input value={addProduct.thumbnail } onChange={handleInputChange} name="thumbnail" type="link" placeholder="Link" className="border-2 rounded-[5px] p-1 focus:outline-none" />
                                    </div>
                                </div>
                                <div className="description flex justify-center mt-3">
                                    <textarea name="" id="" className="border-2 rounded-[5px] w-full focus:outline-none" placeholder="Descrtiption"></textarea>
                                </div>
                                <div className="button flex justify-center">
                                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
                                        Add product
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;