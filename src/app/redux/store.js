import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./features/content/bookSlice";

export const store = configureStore({
  reducer: {
    book: bookReducer,
  },
});
