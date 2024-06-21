import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./Slices/ArticleSlice.js";
import paramsReducer from "./Slices/paramsSlice.js";
import favouriteReducer from "./Slices/FavouritesSlice.js";
const store = configureStore({
    reducer:{
        articles:articleReducer,
        params:paramsReducer,
        favourite:favouriteReducer
    }
});


export default store;