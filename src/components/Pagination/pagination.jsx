const Pagination = ({ currentPage, paginate,lastPage }) => {
    
    return (
      <nav className="flex justify-center">
        <div className="flex gap-5">
            <button className="font-Gilroy_Medium text-xl p-2" disabled={currentPage > 1 ?false:true} onClick={() =>paginate(currentPage-1)}>Prev</button>
            {currentPage != 1 && <button className="font-Gilroy_Medium text-xl p-4 bg-gray-600 text-white rounded-full" onClick={() => paginate(currentPage-1)}>{currentPage-1}</button>}
            <button className="font-Gilroy_Medium text-xl p-4 bg-slate-950 text-white rounded-full" onClick={()=> paginate(currentPage)}>{currentPage}</button>
            {currentPage != lastPage && <button className="font-Gilroy_Medium text-xl p-4 bg-gray-600 text-white rounded-full" onClick={() => paginate(currentPage+1)}>{currentPage+1}</button>}
            <button className="font-Gilroy_Medium text-xl" disabled={currentPage >= lastPage ? true:false} onClick={() =>paginate(currentPage+1)}>Next</button>
        </div>
      </nav>
    );
  };
  

export default Pagination;
