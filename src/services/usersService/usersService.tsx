import http from "../http";
import { Users, SearchUserInterface, Searchuser } from "./users-response.interface";

const getUsers = async(id: string): Promise<Users> => {
    const response = await http.get<Users>(`users/${id}`);
    return response.data
}

const searchingUserByData = async (query: string): Promise<SearchUserInterface[]> => {
    const response =  await http.get<Searchuser<SearchUserInterface>>(`users/search?q=${query}`)
    return response.data.users
}

export {
    getUsers,
    searchingUserByData 
}