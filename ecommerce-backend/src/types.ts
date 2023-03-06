export enum Category {
    Shirt = "shirt",
    Shoes = "shoes"
}

export interface Product {
    id: number;
    title: string;
    price: number;
    category: Category;
    imageUrl: string;
}

export type NewProduct = Omit<Product, "id">;