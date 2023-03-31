type PaginationProps = {
    itemsPerPage: number,
    totalItems: number,
    currentPage: number,
    paginate: Function,
}

const Pagination = ({ itemsPerPage, currentPage, totalItems, paginate }: PaginationProps) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination flex gap-6 justify-center'>
        {pageNumbers.map(number => (
          <li key={number} id={`${number}`} className={`page-item w-7 text-center ${currentPage === number ? "rounded-full border-slate-400 bg-slate-200  " : ""}`}>
            <button onClick={() => paginate(number)} className='page-link'>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;