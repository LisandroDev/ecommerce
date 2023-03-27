import { Product } from "../../types/product";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/products";
import ItemCard from "./ItemCard/ItemCard";

const Shop = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setItems(data));
  }, []);

  return (
    <div className="flex justify-center">
      Shop
      <div className="grid grid-cols-3 gap-0 w-3/4">
        {items ? (
          items.map((product: Product) => (
            <ItemCard key={product.id} product={product} />
          ))
        ) : (
          <> </>
        )}
      </div>
    </div>
  );
};

export default Shop;
