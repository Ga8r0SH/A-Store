import http from "../http";
import { Posts, postInterface } from "./post-responce.interface";


const getPost = async (id: string): Promise<Posts[]> => {
    const response = await http.get<postInterface<Posts>>(`posts/user/${id}`);
    return response.data.posts
}

export {
    getPost
}