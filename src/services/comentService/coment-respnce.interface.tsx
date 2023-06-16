export interface comentInterface<CommentBody> {
    comments: CommentBody[],
    total: number,
    skip: number,
    limit: number
}
export interface CommentBody {
    id: number,
    body: string,
    postId: number,
    user: {
        id: number,
        username: string
    }
}