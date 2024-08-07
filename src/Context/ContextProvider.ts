import {IUsersModel} from "../Models/IUsersModel";
import {IPostsModel} from "../Models/IPostsModel";
import {ICommentsModel} from "../Models/ICommentsModel";
import {createContext, useContext} from "react";


type StoreType = {
    userStore: {
        allUsers: IUsersModel[]
    },
    postStore: {
        allPosts: IPostsModel[]
    },
    commentStore: {
        allComments: ICommentsModel[]
    }
}
const defaultValue: StoreType = {
    userStore:{
        allUsers: []
    },
    postStore:{
        allPosts: []
    },
    commentStore:{
        allComments: []
    }
}

export const MyContext = createContext<StoreType>(defaultValue)
export const useContextProvider = (): StoreType => useContext(MyContext);