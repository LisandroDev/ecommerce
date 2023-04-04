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
    <div>
      <ProductCard key={product.id} product={product} />
      <div className="flex justify-center">
        {" "}
        {getCountOfItem(product.id) === 0 ? (
          <button
          //   className="manrope-font flex sm:inline-flex justify-center items-center px-1 py-1
          // text-center text-black text-sm md:text-lg rounded-md outline-none transition duration-100 bg-slate-200 text-black hover:bg-slate-300 focus-visible:ring ring-slate-300
          // "
          className="text-blueGray-500 bg-transparent border border-solid border-blueGray-500 hover:bg-blueGray-500 hover:text-white active:bg-blueGray-600 font-bold uppercase text-xs px-1 py-1 md:px-4 md:py-4 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            onClick={handleAdd}
          >
            {" "}
            Add to cart
          </button>
        ) : (
          <div className="flex gap-x-4">
            {" "}
            <button className="text-blueGray-500 bg-transparent border border-solid border-blueGray-500 hover:bg-blueGray-500 hover:text-white active:bg-blueGray-600 font-bold uppercase text-xs px-2 md:px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={handleAdd}>
              {" "}
              <TbPlus />{" "}
            </button>{" "}
            {getCountOfItem(product.id)}{" "}
            <button className="text-blueGray-500 md:px-4 bg-transparent border border-solid border-blueGray-500 hover:bg-blueGray-500 hover:text-white active:bg-blueGray-600 font-bold uppercase text-xs px-2 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={handleRemove}>
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
