import {IUsersModel} from "../Models/IUsersModel";
import {IPostsModel} from "../Models/IPostsModel";
import {ICommentsModel} from "../Models/ICommentsModel";
import {create} from "zustand";


type StoreType = {
    userSlice: {
        allUsers: IUsersModel[],
        loadUsers: (users: IUsersModel[]) => void,
        setFavoriteUser: (obj: IUsersModel) => void
        favoriteUser: IUsersModel | null
    },
    postSlice: {
        allPosts: IPostsModel[]
        loadPosts: (posts: IPostsModel[]) => void,
    },
    commentSlice: {
        allComments: ICommentsModel[]
        loadComments: (comments: ICommentsModel[]) => void,
    }
}

export const useStore = create<StoreType>()(set => ({
    userSlice: {
        allUsers: [],
        loadUsers: (users: IUsersModel[])=>{
            return set((state) =>{
                return {
                    ...state,
                    userSlice:{
                        ...state.userSlice,
                        allUsers:users
                    }
                }
            });
        },
        setFavoriteUser: (obj: IUsersModel)=>{
            return set(state => {
                return{
                    ...state,
                    userSlice:{
                        ...state.userSlice,
                        favoriteUser: obj
                    }
                }
            });
        },
        favoriteUser: null
    },
    postSlice:{
        allPosts: [],
        loadPosts: (posts: IPostsModel[])=>{
            return set((state) =>{
                return {
                    ...state,
                    postSlice:{
                        ...state.postSlice,
                        allPosts:posts
                    }
                }
            });
        },
    },
    commentSlice:{
        allComments: [],
        loadComments: (comments: ICommentsModel[])=>{
            return set(state => {
                return{
                    ...state,
                    commentSlice:{
                        ...state.commentSlice,
                        allComments:comments
                    }
                }
            })
        }
    }
}));