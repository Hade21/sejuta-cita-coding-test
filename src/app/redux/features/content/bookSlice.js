import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  page: 0,
  size: 0,
  contentBook: [],
};

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      return {
        ...state,
        categoryId: action.payload,
      };
    },
    setPage: (state, action) => {
      return {
        ...state,
        page: action.payload,
      };
    },
    setSize: (state, action) => {
      return {
        ...state,
        size: action.payload,
      };
    },
    setContent: (state, action) => {
      return {
        ...state,
        contentBook: action.payload,
      };
    },
  },
});

export const { setCategory, setPage, setSize, setContent } = bookSlice.actions;

export default bookSlice.reducer;
