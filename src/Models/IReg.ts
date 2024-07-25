export interface IReg{
    username: string,
    password: string
}

export interface IRegResponce{
    id: number,
    username: string,
    is_active: boolean,
    is_staff: boolean,
    is_superuser: boolean,
    last_login: string,
    created: string,
    updated: string
}