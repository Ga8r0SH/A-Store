import { NavLink } from "react-router-dom";
import photo from "./search.png";
import { useState } from "react";


const Header = () => {


    const [query , setQuery] = useState(''); 
    const setValue = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setQuery(event.target.value)
    }
    

    return (
        <div className="header bg-slate-800 h-[100px] flex items-center shadow-2xl sticky top-0">
            <div className="container max-w-[1200px] mx-auto my-0">
                <div className="wrapper flex justify-between mx-[30px] items-center ">
                    <div className="box__logo font-bold text-3xl text-gray-100">
                        <a href="/"><span className="text-gray-300">Step</span>Dev</a>
                    </div>
                    <div className="navlink mr-[100px]">
                        <ul className="flex justify-center px-[10px]">
                            <li className="px-[15px] text-lg italic hover:text-gray-400 duration-300 cursor-pointer text-white"><NavLink to="/aboutUs" className='text-brand-darkblue text-xl active:text-indigo-400'>О нас</NavLink></li>
                            <li className="px-[15px] text-lg italic hover:text-gray-400 duration-300 cursor-pointer text-white"><NavLink to='/products' className='text-brand-darkblue text-xl active:text-indigo-400'>Продукты</NavLink></li>
                            <li className="px-[15px] text-lg italic hover:text-gray-400 duration-300 cursor-pointer text-white"><NavLink to='/auction' className='text-brand-darkblue text-xl active:text-indigo-400'>Акции</NavLink></li>
                            <li className="px-[15px] text-lg italic hover:text-gray-400 duration-300 cursor-pointer text-white"><NavLink to='/help' className='text-brand-darkblue text-xl active:text-indigo-400'>Помощь</NavLink></li>
                        </ul>
                    </div>
                    <div className="search">
                        <form action="" className="flex justify-center">
                            <input onChange={event => setQuery(event.target.value)} type="text" id="searchInput" placeholder="Поиск..." className="mr-5 rounded px-2 focus:outline-none"/>
                            <button type="submit"><img src={photo} alt="" className=""/></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header;