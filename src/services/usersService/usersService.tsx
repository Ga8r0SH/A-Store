import http from "../http";
import { Users} from "./users-response.interface";

const getUsers = async (id:string): Promise<Users> => {
    const response = await http.get<Users>(`users/${id}`);
    return response.data
}

export {
    getUsers
}