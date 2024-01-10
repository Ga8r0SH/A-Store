import { useParams } from "react-router-dom";
import { SearchUserInterface } from "../../services/usersService/users-response.interface";
import searchUsers from "./searchUsers.png"

type Props = {
    searchUser: string | undefined;
    setSearchUser: React.Dispatch<React.SetStateAction<string | undefined>>
    sendDataSearch: (query: string | undefined) => void
    usersBySearching: SearchUserInterface[] | undefined
}

const SearchUsers = ({ searchUser, setSearchUser, sendDataSearch, usersBySearching }: Props) => {
   

    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            sendDataSearch(searchUser)
        }
    }

    return (
        <div className="relative">
            <input
                value={searchUser}
                onChange={(e) => { setSearchUser(e.target.value) }}
                onKeyDown={handleSearch}
                type="text"
                placeholder="Поиск пользователей"
                className="mr-3 rounded-xl px-7 focus:outline-none w-full py-2 shadow-2xl border-2 mb-5"
            />
            <img src={searchUsers} className="absolute right-3 top-1" alt="" />
            {usersBySearching && usersBySearching.map((users) => (
                <div className="flex bg-white my-5 rounded-2xl px-5 shadow-2xl mx-auto py-4 justify-between w-full">
                    <div className="my-auto flex justify-between items-center">
                        <img className="w-16 rounded-full border-2 border-green-600" src={users.image} alt="" />
                        <h1 className="pl-3">{users.firstName}</h1>
                        <h1 className="px-3">{users.lastName}</h1>
                    </div>
                    <div className=" my-auto">
                        <a href={`/homepage/${users.id}` }className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300  transiton-all duration-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Check Profile</a>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default SearchUsers;