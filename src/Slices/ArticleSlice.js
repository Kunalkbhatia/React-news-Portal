import { createSlice } from "@reduxjs/toolkit";
import Favourites from "../components/ArticlesList/Favourites";

const articleSlice = createSlice({
  name: "articles",
  initialState: {
    articleItems: [],
  },

  reducers: {
    getArticlesRequest: (state, action) => {
      state.loading = true;
    },

    getArticlesSuccess: (state, action) => {
      const articles = action.payload.articles;
      state.articleItems = articles.filter(
        (article) =>
          article.title &&
          article.description &&
          article.title !== "[Removed]" &&
          article.description !== "[Removed]"
      );
      state.loading = false;
    },

    getArticlesFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getErrorClear: (state, action) => {
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  getArticlesFailed,
  getArticlesRequest,
  getArticlesSuccess,
  getErrorClear,
} = articleSlice.actions;
export default articleSlice.reducer;
