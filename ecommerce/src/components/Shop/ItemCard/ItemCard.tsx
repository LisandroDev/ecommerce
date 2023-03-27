import ProductCard from "../../Home/PopularProducts/ProductCard"
import { Product } from "../../../types/product"

type ItemCardProps = { 
    product: Product;
}

const ItemCard = ({product}: ItemCardProps) => {
  return (
    <div><ProductCard key={product.id} product={product} /></div>
  )
}

export default ItemCard