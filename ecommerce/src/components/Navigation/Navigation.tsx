import "./Navigation.css";
import { Link } from "react-router-dom";
import { useCart } from "../Cart/CartProvider";
import { TbShoppingCart } from "react-icons/tb";

const Navigation = () => {
  const { getTotalOfItems } = useCart();

  return (
    <div className="container flex flex-wrap flex-row items-center justify-center md:justify-between lg:justify-between mx-auto mt-5">
      <div className="w-full md:w-auto flex justify-center">
        <div className="logo font-bold text-3xl">
          <span className="text-[#3C9379]">N</span>eithaClothes
        </div>
      </div>

      <div className="flex  justify-center md:block md:w-auto ">
        <ul className=" manrope-font font-medium text-base text-gray-500 flex flex-row space-x-4 p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/cart">
              {" "}
              <div className="flex ">
              <TbShoppingCart size={20} /> {getTotalOfItems()}
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
