import http from "../http"
import { CommentBody, comentInterface } from "./coment-respnce.interface";



const getAllComment = async (id: string): Promise<CommentBody[]> => {
    const response = await http.get<comentInterface<CommentBody>>(`posts/${id}/comments`);
    console.log(response.data.comments)
    return response.data.comments
}
export{
    getAllComment
}