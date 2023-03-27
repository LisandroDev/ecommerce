import { useEffect, useState } from "react";
import { getProducts } from "../../services/products";
import Products from "./Products";
import Pagination from "./Pagination";

const Shop = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const data = await getProducts();
      setItems(data);
      setLoading(false);
    };

    fetchItems();
  }, []);

  //Get current items

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="flex justify-center">
      Shop
      <div className="grid grid-cols-3 gap-0 w-3/4">
        <Products items={currentItems} loading={loading} />
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={items.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Shop;
