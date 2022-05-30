import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  halaman: "home",
  categoryId: 0,
  page: 0,
  size: 5,
  contentBook: [],
  width: 0,
  search: "",
};

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setHalaman: (state, action) => {
      return {
        ...state,
        halaman: action.payload,
      };
    },
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
    setWidth: (state, action) => {
      return {
        ...state,
        width: action.payload,
      };
    },
    setSearch: (state, action) => {
      return {
        ...state,
        search: action.payload,
      };
    },
  },
});

export const {
  setHalaman,
  setCategory,
  setPage,
  setSize,
  setContent,
  setWidth,
  setSearch,
} = bookSlice.actions;

export default bookSlice.reducer;
