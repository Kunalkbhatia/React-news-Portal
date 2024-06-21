import axios from "axios";
import {
  getArticlesFailed,
  getArticlesRequest,
  getArticlesSuccess,
} from "../Slices/ArticleSlice";
import { addFavouriteRequest, addFavouriteSuccess, removeFavouriteRequest, removeFavouriteSuccess } from "../Slices/FavouritesSlice";

export const getArticles = (q, page, category) => async (dispatch) => {
  const apiKey = import.meta.env.VITE_API_KEY
  try {
    dispatch(getArticlesRequest());
    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us`,
      {
        params: {
          q: q,
          page: page,
          category,
          apiKey: import.meta.env.VITE_API_KEY,
        },
      }
    );
    dispatch(getArticlesSuccess(data));
  } catch (error) {
    dispatch(getArticlesFailed(error.response.data.message));
  }
};

export const addToFavourites = (article) => (dispatch, getState) => {
  dispatch(addFavouriteRequest());
  dispatch(addFavouriteSuccess(article));
  localStorage.setItem(
    "FavouriteItems",
    JSON.stringify(getState().favourite.favouriteArticles)
  );
};


export const removeFromFavourites = (index) => (dispatch, getState) => {
  dispatch(removeFavouriteRequest());
  dispatch(removeFavouriteSuccess(index));
  localStorage.setItem(
    "FavouriteItems",
    JSON.stringify(getState().favourite.favouriteArticles)
  );
};
