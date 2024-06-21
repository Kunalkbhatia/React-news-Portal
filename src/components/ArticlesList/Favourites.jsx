import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../Cards/NewsCard.jsx";
import Loader from "../Loader/Loader.jsx";
import { removeFromFavourites } from "../../actions/articleActions.js";

const Favourites = () => {
  const dispatch = useDispatch();
  const { loading, favouriteArticles } = useSelector(
    (state) => state.favourite
  );

  const removeFavouriteHandler = (index) => {
    dispatch(removeFromFavourites(index));
  };
  return loading ? (
    <Loader />
  ) : (
    <div className="grid">
      <div className="grid grid-cols-3 p-14  gap-10 bg-landingPrimary-0">
        {favouriteArticles.map((item, index) => {
          return (
            <NewsCard
              key={item.title}
              title={item.title}
              description={item.description}
              urlToImage={item.urlToImage}
              index={index}
              onclick={() => removeFavouriteHandler(index)}
              buttonType={"Remove From Favorites"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Favourites;
