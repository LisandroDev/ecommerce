import { Product } from "../../types/product";
import ItemCard from "./ItemCard/ItemCard";

type ItemsProps = {
  items: Array<Product>;
  loading: boolean;
};

const Products = ({ items, loading }: ItemsProps) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      {items ? (
        items.map((product: Product) => (
          <ItemCard key={product.id} product={product} />
        ))
      ) : (
        <> </>
      )}
    </div>
  );
};

export default Products;
