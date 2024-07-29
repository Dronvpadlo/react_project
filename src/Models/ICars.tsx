export interface ICarsPaginated{
    total_items: number,
    total_pages: number,
    prev: null,
    next: null,
    items: []
}
export interface ICars{
    id: number,
    brand: string,
    price: number,
    year: number
}