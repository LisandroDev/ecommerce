import { useCart } from "./CartProvider";

const Cart = () => {
  const { cartItems, clearCart } = useCart();

  const renderTableItems = (name: string, quantity: number, price: number) => {
    return (
      <tr>
        <td>{name} </td>
        <td>{quantity}</td>
        <td>{price}</td>
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
                  renderTableItems(item.name, item.quantity, item.price)
                )}
              </tbody>
            </table>
            <button onClick={handleClear}> Clear Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
