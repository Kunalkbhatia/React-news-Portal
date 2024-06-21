import { createSlice } from "@reduxjs/toolkit";

const FavouriteSlice = createSlice({
  name: "favourite",
  initialState: {
    favouriteArticles: localStorage.getItem("FavouriteItems")
      ? JSON.parse(localStorage.getItem("FavouriteItems"))
      : [],
  },

  reducers: {
    addFavouriteRequest: (state, action) => {
      state.loading = true;
    },

    addFavouriteSuccess: (state, action) => {
      const article = action.payload;
      const index = state.favouriteArticles.findIndex(
        (i) => i.title === article.title
      );
      if (index !== -1) {
        state.favouriteArticles[index] = article;
      } else {
        state.favouriteArticles.push(article);
      }
      state.loading = false;
    },
    removeFavouriteRequest: (state, action) => {
      state.loading = true;
    },
    removeFavouriteSuccess: (state, action) => {
      const removedIndex = action.payload;

      state.loading = false;
      state.favouriteArticles = state.favouriteArticles.filter(
        (_, index) => index !== removedIndex
      );
    },
  },
});

export const {
  addFavouriteRequest,
  addFavouriteSuccess,
  removeFavouriteRequest,
  removeFavouriteSuccess,
} = FavouriteSlice.actions;
export default FavouriteSlice.reducer;
