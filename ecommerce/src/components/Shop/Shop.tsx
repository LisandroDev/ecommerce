import { useEffect, useState } from "react";
import { getProducts } from "../../services/products";
import Products from "./Products";
import Filters from "./Filters";
import Pagination from "./Pagination";
import { Product } from "../../types/product";

const Shop = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState([]);
  const [categories, setCategories] = useState([""]);
  const [itemsPerPage] = useState(6);

  // Get list of categories

  const getCategorys = (data: Product[]) => {
    const listOfCategories = data.map((e) => e.category);
    const uniqueCategories: string[] = listOfCategories.filter(
      (element, index) => {
        return listOfCategories.indexOf(element) === index;
      }
    );
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const data = await getProducts();
      getCategorys(data);
      setItems(data);
      setLoading(false);
    };

    fetchItems();
  }, []);

  //Pagination variables.

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems =
    filters.length > 0
      ? items
          .filter((e) => filters.includes(e["category"]))
          .slice(indexOfFirstItem, indexOfLastItem)
      : items.slice(indexOfFirstItem, indexOfLastItem);

  const totalItems =
    filters.length > 0
      ? items.filter((e) => filters.includes(e["category"])).length
      : items.length;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="flex sm:flex-row sm:flex-wrap md:flex-nowrap md:flex-row justify-center manrope-font">
      <div className="mt-24">
        <p>Filter by category: </p>
        <Filters
          categories={categories}
          setfilters={setFilters}
          filters={filters}
        />
      </div>
      <div className="flex justify-center gap-y-4 flex-col">
        <Products items={currentItems} loading={loading} />
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Shop;
