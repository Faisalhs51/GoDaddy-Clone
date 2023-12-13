import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type MenuState = {
  langMenuShow: boolean;
  //   optionsMenuShow: boolean;
};

const InitialState: MenuState = {
  langMenuShow: false,
  //   optionsMenuShow: false,
};

export const menu = createSlice({
  name: "footerMenu",
  initialState: InitialState,
  reducers: {
    setLangMenu: (state, action: PayloadAction<any>) => {
      state.langMenuShow = action.payload.langMenuShow;
      //   state.optionsMenuShow = action.payload.optionsMenuShow;
    },
  },
});

export default menu.reducer;
