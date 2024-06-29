export interface IProducts {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    availabilityStatus: string,
    brand: string;
    dimensions: {width: number, height: number, depth: number};
    discountPercentage: number
}