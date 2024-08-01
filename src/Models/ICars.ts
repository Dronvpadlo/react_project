export interface ICarsPaginated{
    total_items: number,
    total_pages: number,
    prev: null | {page: string},
    next: null | {page: string},
    items: []
}
export interface ICars{
    id: number,
    brand: string,
    price: number,
    year: number
}

export interface IPagePaginated{
    prev: null | {page: string},
    next: null | {page: string},
}