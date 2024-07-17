import {IUser} from "../types/IUser";
import {IPost} from "../types/IPost";
import {IComment} from "../types/IComment";

const baseUrl = 'https://jsonplaceholder.typicode.com'
const getAllUsers = async (): Promise<IUser[]> =>{
    return await fetch(baseUrl+'/users')
        .then(value => value.json())

}
const getPostsOfUserByUserId = async (id:number): Promise<IPost[]>=>{
    return await fetch(baseUrl + '/users/' + id + '/posts')
        .then(value => value.json())

}
const getAllPosts = async (): Promise<IPost[]> =>{
    return await fetch(baseUrl+'/posts')
        .then(value => value.json())

}

const getCommentsOfUserByPost = async (id:number): Promise<IComment[]>=>{
    return await fetch(baseUrl + '/post/' + id + '/comments')
        .then(value => value.json())

}
const getAllComments = async (): Promise<IComment[]> =>{
    return await fetch(baseUrl+'/comments')
        .then(value => value.json())

}


export {getAllUsers, getPostsOfUserByUserId, getAllPosts, getAllComments, getCommentsOfUserByPost}