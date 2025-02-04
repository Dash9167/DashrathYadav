import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeslice"; // Import the theme reducer

const store = configureStore({
  reducer: {
    theme: themeReducer, // Add theme reducer
  },
});

export default store;
