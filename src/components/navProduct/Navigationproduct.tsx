import { NavLink } from "react-router-dom";


const Navigationproduct = () => {
    return (
        <div className="navigationProduct ">
            <div className="container max-w-[1200px] mx-auto my-0">
                <div className="wrapper__link mx-[30px] items-center mt-[25px] bg-gray-200 rounded-[15px]">
                    <ul className='flex justify-between px-[10px] text-center'>
                        <li className="border-r-2 border-gray-500 px-[50px] py-2 text-lg bg-slate-200 hover:text-[20px] duration-200 w-[100%]"><NavLink to='/products/phone'>Phones</NavLink></li>
                        <li className="border-r-2 border-gray-500 px-[50px] py-2 text-lg bg-slate-200 hover:text-[20px] duration-200 w-[100%]"><NavLink to='/products/nout'>Laptops</NavLink></li>
                        <li className="border-r-2 border-gray-500 px-[50px] py-2 text-lg bg-slate-200 hover:text-[20px] duration-200 w-[100%]"><NavLink to='/products/home-decoration'>Decorations</NavLink></li>
                        <li className="px-[50px] py-2 text-lg bg-slate-200 hover:text-[20px] duration-200 w-[100%]"><NavLink to='/products/furniture'>Furniture </NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Navigationproduct;