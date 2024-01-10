import { CommentBody } from "../../services/comentService/coment-respnce.interface";
import person from './perosn.png'


type Props = {
    com: CommentBody[] | undefined
    postId: number
}

const ComentUI = ({ com, postId }: Props) => {
    return (
        <div className="py-2">
            {com && com.map((commentaries) => (
                <div className="">
                    {postId === commentaries.postId &&
                        <div className="my-5 p-3 border-2 border-green-600 rounded-2xl">
                            <div className="flex items-center">
                                <div><img src={person} alt="" /></div>
                                <div className="ml-5">
                                    <div className="my-2 font-semibold">{commentaries.user.username}</div>
                                    <div>{commentaries.body}</div>
                                </div>

                            </div>

                        </div>
                    }
                </div>
            ))}
        </div>
    )
}
export default ComentUI;