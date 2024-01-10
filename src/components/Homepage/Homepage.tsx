
import { SearchUserInterface, Users } from "../../services/usersService/users-response.interface";
import PostAPI from "../post/PostAPI";
import SearchUsers from "./SearchUsers";

type Props = {
    users: Users | undefined
    searchUser: string | undefined,
    setSearchUser: React.Dispatch<React.SetStateAction<string | undefined>>
    sendDataSearch:(query: string | undefined) => void
    usersBySearching: SearchUserInterface[] | undefined
}

const Homepage = ({ users , searchUser ,setSearchUser, sendDataSearch , usersBySearching}: Props) => {
    return (
        <div className="profile py-10 bg-red-50 ">
            <div className="container max-w-[1400px] mx-auto my-0 px-5">
                <div className="flex flex-wrap md:flex-nowrap">
                    <div className="box__left w-full md:w-1/3">
                        <div className="text-center shadow-2xl rounded-2xl bg-white shadow-3xl">
                            <div className="logo flex justify-center">
                                <img className='rounded-full'src={users?.image} alt="czx" />
                            </div>
                            <div className="py-7">
                                <span className="text-xl font-semibold">{users?.username}</span>
                            </div>
                        </div>
                        <div className="bg-white my-5 px-7 rounded-2xl shadow-2xl">
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
                        <SearchUsers
                          searchUser={searchUser}  
                          setSearchUser={setSearchUser}
                          sendDataSearch={sendDataSearch}
                          usersBySearching={usersBySearching}
                        />
                    </div>
                    <div className="box__right ml-0 w-full md:w-2/3 md:ml-10">
                        <div className="firstBox bg-white rounded-2xl">
                            <div className="wrapper-box px-7 rounded-2xl shadow-2xl">
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