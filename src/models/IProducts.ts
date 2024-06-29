export default interface IProducts {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    availabilityStatus: string;
    brand: string;
    dimensions: {width: number, height: number, depth: number};
    discountPercentage: number;
    images: string[];
    meta: {createdAt: string, updatedAt: string, qrCode: string};
    minimumOrderQuantity: number;
    rating: number;
    returnPolicy: string;
    reviews:{comment: string, date: string, rating: number, reviewerEmail: string, reviewerName: string}[];
    shippingInformation: string;
    sku: string;
    stock: number;
    tags: string[];
    thumbnail: string;
    warrantyInformation: string;
    weight: number
}