import { NavLink } from "react-router-dom";


const Navigationproduct = () => {
    return (
        <div className="navigationProduct">
            <div className="container max-w-[1200px] mx-auto my-0">
                <div className="wrapper__link mx-[30px] items-center mt-[25px]">
                    <ul className='flex justify-between px-[10px]'>
                        <li className="border px-[50px] py-2 text-lg rounded bg-slate-200"><NavLink to='/phone'>Телефоны</NavLink></li>
                        <li className="border px-[50px] py-2 text-lg rounded bg-slate-200"><NavLink to='/nout'>Ноутбуки</NavLink></li>
                        <li className="border px-[50px] py-2 text-lg rounded bg-slate-200"><NavLink to='/home-decoration'>Декорации</NavLink></li>
                        <li className="border px-[50px] py-2 text-lg rounded bg-slate-200"><NavLink to='/furniture'>Мебель</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Navigationproduct;