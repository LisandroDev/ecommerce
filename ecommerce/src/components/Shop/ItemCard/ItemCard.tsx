import ProductCard from "../../Home/PopularProducts/ProductCard";
import { Product } from "../../../types/product";
import { TbMinus, TbPlus } from "react-icons/tb";
import { useCart } from "../../Cart/CartProvider";

type ItemCardProps = {
  product: Product;
};

const ItemCard = ({ product }: ItemCardProps) => {
  const { addItemToCart, removeItemFromCart, getCountOfItem } = useCart();

  const handleAdd = () => {
    addItemToCart(product);
  };

  const handleRemove = () => {
    removeItemFromCart(product.id);
  };

  return (
    <div >
      <ProductCard key={product.id} product={product} />
      <div className="flex justify-center">
        {" "}
        {getCountOfItem(product.id) === 0 ? (
          <button className="manrope-font text-center" onClick={handleAdd}>
            {" "}
            Add to cart
          </button>
        ) : (
          <div>
            {" "}
            <button className="manrope-font" onClick={handleAdd}>
              {" "}
              <TbPlus />{" "}
            </button>{" "}
            {getCountOfItem(product.id)}{" "}
            <button onClick={handleRemove}>
              {" "}
              <TbMinus />{" "}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
