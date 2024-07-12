import {IPosts} from "../models/IPosts";
import apiService from "./api.service";
import {IRes} from "../models/resType";
import {urls} from "../constants/urls";

const postService = {
    getAll:():IRes<IPosts[]> => apiService.get(urls.posts.base),
    create: (data:IPosts): IRes<IPosts> => apiService.post(urls.posts.base, data)
}

export{ postService}