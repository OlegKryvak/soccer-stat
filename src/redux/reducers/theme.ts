import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface themeState {
  theme: "dark" | "light";
}

const initialState: themeState = {
  theme: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, { payload }) => {
      state.theme = payload.theme;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export const selectTheme = ({ theme }: RootState) => theme.theme;

export default themeSlice.reducer;
