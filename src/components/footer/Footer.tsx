
const Footer = () => {
    const idUser = localStorage.getItem("id");
    return (
        <footer className="dark:bg-gray-800 shadow-md h-[100px] flex items-center ">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href={`/homepage/${idUser}`} className="hover:underline">A-Store™</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href={`/homepage/${idUser}`}  className="mr-4 hover:underline md:mr-6 ">Home</a>
                    </li>
                    <li>
                        <a href="/products" className="mr-4 hover:underline md:mr-6">Product</a>
                    </li>
                    <li>
                        <a href="/discounts" className="mr-4 hover:underline md:mr-6">Discounts</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Help</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;