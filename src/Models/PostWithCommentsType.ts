import {IPostsModel} from "./IPostsModel";
import {ICommentsModel} from "./ICommentsModel";

export type PostWithCommentsType = IPostsModel & {comments: ICommentsModel[]}