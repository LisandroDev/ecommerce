import { useCart } from "./CartProvider";
import { TbMinus } from "react-icons/tb";
import CheckoutModal from "../Checkout/CheckoutModal";

const Cart = () => {
  const { cartItems, clearCart, removeItemFromCart, getTotalPrice } = useCart();

  const renderTableItems = (
    name: string,
    quantity: number,
    price: number,
    id: number
  ) => {
    return (
      <tr>
        <td>{name} </td>
        <td>{quantity}</td>
        <td>{price}</td>
        <button onClick={() => removeItemFromCart(id)}>
          <TbMinus />
        </button>
      </tr>
    );
  };

  const handleClear = () => {
    clearCart();
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div className="py-2 min-w-full sm:px-6 lg:px-8">
          <div className="manrope-font overflow-hidden flex flex-col items-center gap-y-16 justify-center">
            <table className="table-auto w-1/2">
              <thead className="bg-white border-b">
                <tr>
                  <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Product name
                  </th>
                  <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Quantity
                  </th>
                  <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Price per item
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) =>
                  renderTableItems(
                    item.name,
                    item.quantity,
                    item.price,
                    item.id
                  )
                )}
              </tbody>
            </table>
            <div>Total: $ {getTotalPrice().toFixed(2)}</div>
            <div className="flex justify-between gap-x-4">
              <button
                className="text-blueGray-500 md:px-4 bg-transparent border border-solid border-blueGray-500 hover:bg-blueGray-500 hover:text-white active:bg-blueGray-600 font-bold uppercase text-xs px-2 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                onClick={handleClear}
              >
                {" "}
                
                Clear Cart
              </button>
              <CheckoutModal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
