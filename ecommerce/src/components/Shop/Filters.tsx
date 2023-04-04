
type FilterProps = {
  categories: Array<string>;
  setfilters: Function;
  filters: Array<string>;
};

const Filters = ({ categories, setfilters, filters }: FilterProps) => {


    const handleChange = (categoryValue: string) => {
        if(filters.includes(categoryValue)){
            const newFilters = [...filters]
            const index = filters.indexOf(categoryValue);
            newFilters.splice(index, 1)
            setfilters(newFilters);
        } else {
            const newFilters = [...filters]
            newFilters.push(categoryValue)
            setfilters(newFilters)
        }
        console.log(filters)
    }

  return (
    <div className="manrope-font">
      <ul className="grid grid-cols-3 gap-x-4 gap-y-0 md:grid-cols-1 md:gap-y-1">
        {categories.map((category) => (
          <li  key={category}>
            <input
              type="checkbox"
              name={category}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              value={category}
              placeholder={category}
              onChange={() => handleChange(category)}
            />
            <label className="ml-3 min-w-0 flex-1 text-gray-500">{category.charAt(0).toUpperCase() + category.slice(1)}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filters;
