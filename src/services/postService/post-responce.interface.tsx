export interface postInterface<Posts>{
    limit: number
    posts: Posts[]
    skip: number
    total: number
}
export interface Posts{
    id:number,
    body:string,
    title:string,
    userId:number,
    tags:string[],
    reactions:number
}