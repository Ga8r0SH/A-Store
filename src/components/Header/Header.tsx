import { NavLink, useParams } from "react-router-dom";
import photo from "./search.png";
import logo from "./logo.png"

type Props = {
    searchQuery: string;
    onSearchInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSearchSubmit: (event: React.FormEvent) => void;
};

const Header = ({ searchQuery, onSearchInputChange, onSearchSubmit }: Props) => {
   const idUser = localStorage.getItem("id");
    return (
        <div className="header bg-slate-800 h-[100px] flex items-center shadow-2xl sticky top-0">
            <div className="container max-w-[1200px] mx-auto my-0">
                <div className="wrapper flex justify-between mx-[30px] items-center ">
                    <div className="box__logo font-bold text-3xl text-gray-100 flex justify-center items-center">
                    <img src={logo} alt="" className="w-[100px]" />
                        <a href={`/homepage/${idUser}`} >
                          A-<span className="text-gray-400">Store</span>
                        </a>
                    </div>
                    <div className="navlink mr-[100px]">
                        <ul className="flex justify-center px-[10px]">
                            <li className="px-[15px] text-lg italic hover:text-gray-400 duration-300 cursor-pointer text-white">
                                <NavLink to={`/homepage/${idUser}`} className='text-brand-darkblue text-xl active:text-indigo-400'>Home</NavLink>
                            </li>
                            <li className="px-[15px] text-lg italic hover:text-gray-400 duration-300 cursor-pointer text-white">
                                <NavLink to='/products' className='text-brand-darkblue text-xl active:text-indigo-400'>Products</NavLink>
                            </li>
                            <li className="px-[15px] text-lg italic hover:text-gray-400 duration-300 cursor-pointer text-white">
                                <NavLink to='/discounts' className='text-brand-darkblue text-xl active:text-indigo-400'>Discounts</NavLink>
                            </li>
                            <li className="px-[15px] text-lg italic hover:text-gray-400 duration-300 cursor-pointer text-white">
                                <NavLink to='/help' className='text-brand-darkblue text-xl active:text-indigo-400'>Help</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="search">
                        <form onSubmit={onSearchSubmit} className="flex justify-center">
                            <input
                                value={searchQuery}
                                onChange={onSearchInputChange}
                                type="text"
                                id="searchInput"
                                placeholder="Поиск..."
                                className="mr-3 rounded px-2 focus:outline-none"
                            />
                            <button type="submit">
                                <img  className = " " src={photo} alt=""/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;