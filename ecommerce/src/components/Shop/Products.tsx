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
    <div className="grid mt-16 self-center  grid-cols-2 gap-y-16 gap-x-16 w-3/4 md:grid-cols-3 md:gap-x-32">
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
