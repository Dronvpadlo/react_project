export interface IAuth{
    username: string,
    password: string
}
export interface IAuthResponse{
    refresh: string,
    access: string
}