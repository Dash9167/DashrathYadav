import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkMode: false, // Default is Light Mode
  };
  
  const themeslice = createSlice({
    name: "theme",
    initialState,
    reducers: {
      toggleTheme: (state) => {
        state.darkMode = !state.darkMode;
      },
    },
  });
  
export const { toggleTheme } = themeslice.actions;
export default themeslice.reducer;
