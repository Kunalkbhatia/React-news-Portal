import { createSlice } from "@reduxjs/toolkit";

const paramsSlice = createSlice({
  name: "parameters",
  initialState: {
    page: 1,
  },

  reducers: {
    setSearchParam: (state, action) => {
      state.q = action.payload;
    },

    setCategory: (state, action) => {
      state.category = action.payload;
    },

    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setCategory, setPage, setSearchParam } = paramsSlice.actions;
export default paramsSlice.reducer;
