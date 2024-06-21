import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavourites, getArticles } from "../../actions/articleActions";

import Filter from "../Filter/Filter";
import Loader from "../Loader/Loader";
import NewsCard from "../Cards/NewsCard";
import Pagination from "../Pagination/pagination";
import { usePagination } from "../../Hooks/usePagination";

const Listing = () => {
  const dispatch = useDispatch();
  const { page, q, category } = useSelector((state) => state.params);
  const { articleItems, loading } = useSelector((state) => state.articles);
  const articlesPerPage = 9;
  const { currentPage, currentItems, paginate } = usePagination(articleItems,articlesPerPage);



  const addFavouriteHandler = (article) => {
    dispatch(addToFavourites(article));
    console.log(articleItems);
  };
  useEffect(() => {
    dispatch(getArticles(q, page, category));
  }, [dispatch, q, page, category]);

  return loading ? (
    <Loader />
  ) : (
    <div className="bg-landingPrimary-0">
      <Filter />
      <div className="grid md:grid-cols-3 md:p-14 md:gap-10  grid-col-1 p-1 gap-10">
        {currentItems.map((item, index) => {
          return (
            <NewsCard
              key={item.title}
              title={item.title}
              description={item.description}
              urlToImage={item.urlToImage}
              index={index}
              onclick={() => addFavouriteHandler(item)}
              buttonType={"Add to Favorites"}
            />
          );
        })}
      </div>
      <Pagination
        currentPage={currentPage}
        paginate={paginate}
        lastPage ={Math.ceil(articleItems.length/articlesPerPage)}
      />
    </div>
  );
};

export default Listing;
