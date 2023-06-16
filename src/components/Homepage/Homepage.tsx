
import { Users } from "../../services/usersService/users-response.interface";
import PostAPI from "../post/PostAPI";

type Props = {
    users: Users | undefined
}

const Homepage = ({ users }: Props) => {
    return (
        <div className="profile  bg-gradient-to-tl from-blue-300 to-blue-700 py-20">
            <div className="container max-w-[1400px] mx-auto my-0">
                <div className="flex">
                    <div className="box__left w-1/3">
                        <div className="text-center shadow-2xl rounded-full bg-white shadow-blue-400 shadow-3xl">
                            <div className="logo flex justify-center ">
                                <img className='rounded-full'src={users?.image} alt="czx" />
                            </div>
                            <div className="py-7">
                                <span className="text-xl font-semibold">{users?.username}</span>
                            </div>
                        </div>
                        <div className="bg-white my-5 px-7 rounded-2xl shadow-blue-500 shadow-2xl">
                            <h1 className="text-center py-5 font-semibold text-2xl">Company</h1>
                            <hr className="w-full border-[1px]" />
                            <div className="flex justify-between py-5">
                                <div className="font-semibold">Title</div>
                                <div>{users?.company.title}</div>
                            </div>
                            <hr className="w-full border-[1px]" />
                            <div className="flex justify-between py-5">
                                <div className="font-semibold">Address</div>
                                <div>{users?.company.address.address}</div>
                            </div>
                            <hr className="w-full border-[1px]" />
                            <div className="flex justify-between py-5">
                                <div className="font-semibold">Gmail</div>
                                <div>{users?.email}</div>
                            </div>
                        </div>
                    </div>
                    <div className="box__right ml-10 w-2/3">
                        <div className="firstBox ">
                            <div className="wrapper-box px-7 rounded-[25px]  bg-white shadow-xl">
                                <div className="grid grid-cols-2 w-3/4 p-5">
                                    <div className="font-semibold">Full Name </div>
                                    <div>{users?.lastName} {users?.firstName}</div>
                                </div>
                                <hr className="w-full border-[1px]" />
                                <div className="grid grid-cols-2 w-3/4 p-5">
                                    <div className="font-semibold">Email</div>
                                    <div>{users?.email}</div>
                                </div>
                                <hr className="w-full border-[1px]" />
                                <div className="grid grid-cols-2 w-3/4 p-5">
                                    <div className="font-semibold">Phone </div>
                                    <div>{users?.phone}</div>
                                </div>
                                <hr className="w-full border-[1px]" />
                                <div className="grid grid-cols-2 w-3/4 p-5">
                                    <div className="font-semibold">BirthDate</div>
                                    <div>{users?.birthDate}</div>
                                </div>
                                <hr className="w-full border-[1px]" />
                                <div className="grid grid-cols-2 w-3/4 p-5">
                                    <div className="font-semibold">Age</div>
                                    <div>{users?.age}</div>
                                </div>
                                <hr className="w-full border-[1px]" />

                            </div>
                        </div>
                        <div className="secondBox">
                            <PostAPI/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;