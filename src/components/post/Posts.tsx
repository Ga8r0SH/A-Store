import { useState } from "react";
import { Posts } from "../../services/postService/post-responce.interface";
import pngwing from './imagePosts.png';
import like from './like.png';
import ComentUI from "../comentaries/ComentUI";
import { CommentBody } from "../../services/comentService/coment-respnce.interface";


type Props = {
    post: Posts[] | undefined;
    onCreateComent: (id: number | undefined) => void
    com: CommentBody[] | undefined
   
}

const Post = ({ post, onCreateComent , com }: Props) => {
    const [isShowComp, setShowComp] = useState(false);

    const openComponents = (id: number | undefined) => {
        setShowComp(true);
        onCreateComent(id);
    }
    return (
        <div className="Posts">
            {post && post.map((item) => (
                <div className="warapper  bg-white my-5 rounded-2xl px-5 shadow-purple-400 shadow-2xl ">
                    <div className="title font-extrabold text-2xl py-10 flex justify-between ">
                        {item.title} <img src={pngwing} alt="" />
                    </div>
                    <div className="body font-mono text-lg text-[15px] pb-5 relative">
                        {item.body}
                        <div className="absolute right-1 flex m-3">
                            <img className="mr-2 w-7" src={like} alt="" />{item.reactions}
                        </div>

                    </div>
                    <div className="pb-5 text-right flex justify-between ">
                        <div className="comentriu">
                            <button className="border-2 mt-5 p-2 rounded-xl" type="submit" onClick={() => openComponents(item.id)}>Comments </button>

                        </div>

                        <div className="teg flex justify-between">
                            {item?.tags.map((tag) => (
                                <div className="mx-1 mt-5 ">
                                    #{tag}
                                </div>
                            ))}
                        </div>

                    </div>
                    
                    {isShowComp &&
                        <ComentUI
                            com={com}
                            postId={item.id}
                        />
                    }
                </div>
            ))}
        </div>


    )
}
export default Post;