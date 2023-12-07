import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type MenuState = {
  menuItem: number;
  menuShow: boolean;
  optionsMenuShow: boolean;
};

const InitialState: MenuState = {
  menuItem: 0,
  menuShow: false,
  optionsMenuShow: false,
};

export const menu = createSlice({
  name: "menu",
  initialState: InitialState,
  reducers: {
    setMenu: (state, action: PayloadAction<any>) => {
      state.menuItem = parseInt(action.payload.menuItem);
      state.menuShow = action.payload.menuShow;
      state.optionsMenuShow = action.payload.optionsMenuShow;
    },
  },
});

export default menu.reducer;
