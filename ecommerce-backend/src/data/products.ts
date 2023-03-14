import {Product} from "../types"
import { toNewProduct } from "../utils";

const data = [
  { id: 1, title: "Nike Air", price: 109.95, category: "shoes",imageUrl: "/images/airNike" },
  { id: 2, title: "Kiikii Shirt", price: 22, category: "shirt", imageUrl: "/images/animeShirt"},
  {
    id: 3,
    title: "Leave the Road Shirt",
    price: 20,
    category: "shirt",
    imageUrl: "/images/leaveTheRoadShirt"
  },
  {
    id: 4,
    title: "Adidas classic",
    price: 92,
    category: "shoes",
    imageUrl: "/images/retroShoes"
  },
];

const products: Product [] = data.map(obj => {
  const object = toNewProduct(obj) as Product;
  object.id = obj.id;
  return object
});

export default products;
