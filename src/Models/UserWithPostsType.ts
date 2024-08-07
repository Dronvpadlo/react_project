import {IUsersModel} from "./IUsersModel";
import {IPostsModel} from "./IPostsModel";

export type UserWithPostsType = IUsersModel & {posts: IPostsModel[]}