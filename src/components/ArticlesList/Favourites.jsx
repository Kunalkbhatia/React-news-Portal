import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../Cards/NewsCard.jsx";
import Loader from "../Loader/Loader.jsx";
import { removeFromFavourites } from "../../actions/articleActions.js";
import toast from "react-hot-toast";
import NotFound from "../Not Found/notFound.jsx";

const Favourites = () => {
  const dispatch = useDispatch();
  const { loading, favouriteArticles } = useSelector(
    (state) => state.favourite
  );

  const removeFavouriteHandler = (index) => {
    dispatch(removeFromFavourites(index));
    toast.success("Article Removed from Favourites");
  };
  return loading ? (
    <Loader />
  ) : (
    favouriteArticles.length > 0 ? <div className="grid">
    <div className="grid md:grid-cols-3 md:p-14 md:gap-10  grid-col-1 p-1 gap-10 bg-landingPrimary-0">
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
  </div> : <NotFound text="Please add some articles to your favourites"/>
  );
};

export default Favourites;
