export enum Category {
    Shirt = "shirt",
    Shoes = "shoes"
}

export interface Product {
    id: number;
    name: string;
    price: number;
    category: Category;
    imageUrl: string;
}