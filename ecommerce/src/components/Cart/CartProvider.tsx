import { createContext, useContext, useEffect, useState } from "react";
import { Product } from "../../types/product";

type Item = {
  quantity: number;
};

type CartItem = Product & Item;

type CartContextType = {
  cartItems: CartItem[];
  addItemToCart: (item: Product) => void;
  removeItemFromCart: (itemIndex: number) => void;
  clearCart: () => void;
  getCountOfItem: (itemId: number) => number;
  getTotalOfItems: () => number;
};

const CartContext = createContext<CartContextType>({
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearCart: () => {},
  getCountOfItem: (itemId: number) => 0,
  getTotalOfItems: () => 0,
});

export const useCart = () => useContext(CartContext);

type CartProviderProps = {
  children: React.ReactNode;
};

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(
    JSON.parse(localStorage.getItem("cartItems") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addItemToCart = (item: Product) => {
    if (cartItems.some((e) => e.id === item.id)) {
      const indexOnCart = cartItems.findIndex((obj) => obj.id === item.id);
      const newCartItems = [...cartItems];
      newCartItems[indexOnCart].quantity++;
      setCartItems(newCartItems);
    } else {
      const newEntry = { ...item, quantity: 1 };
      setCartItems([...cartItems, newEntry]);
    }
  };

  const removeItemFromCart = (itemId: number) => {
    const indexOnCart = cartItems.findIndex((obj) => obj.id === itemId);
    if (cartItems[indexOnCart].quantity > 1) {
      const newCartItems = [...cartItems];
      newCartItems[indexOnCart].quantity--;
      setCartItems(newCartItems);
    } else {
      const newCartItems = [...cartItems];
      newCartItems.splice(
        newCartItems.findIndex((obj) => obj.id === itemId),
        1
      );
      setCartItems(newCartItems);
    }
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  const getCountOfItem = (itemId: number) => {
    const indexOnCart = cartItems.findIndex((obj) => obj.id === itemId);
    if (indexOnCart >= 0) {
      return cartItems[indexOnCart].quantity;
    }
    return 0;
  };
  
  const getTotalOfItems = () => {
    const initialValue = 0;
   const sumWithInitial = cartItems.reduce(
  (accumulator, item) => accumulator + item.quantity,
  initialValue
  );
  return sumWithInitial;

  }

  const cartContextValue = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearCart,
    getCountOfItem,
    getTotalOfItems
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
