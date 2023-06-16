import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getPost } from "../../services/postService/prostService"
import Preloader from "../navProduct/preloader/Preloader";
import { Posts } from "../../services/postService/post-responce.interface";
import Post from "./Posts";
import { getAllComment } from "../../services/comentService/comentService";
import { CommentBody } from "../../services/comentService/coment-respnce.interface";


const PostAPI = () => {
    const [reloading, setReloading] = useState<boolean>(true);
    const { id } = useParams();
    const [post, setPost] = useState<Posts[]>();
    useEffect(() => {
        setReloading(true)
        if (id) {
            getPost(id)
                .then((data) => {
                    setPost(data)
                    setReloading(false)
                })
        }
    }, [id])


    const [com, setCom] = useState<CommentBody[]>();
    const onCreateComent = (id: number | undefined) => {
        if (id) {
            getAllComment(id.toString())
                .then(data => {
                    setCom(data)
                })
        }
    }
    return (
        <div>
            {
                <Post
                    post={post}
                    onCreateComent={onCreateComent}
                    com={com}
                 />}
        </div>
    )
}
export default PostAPI;