import { configureStore } from "@reduxjs/toolkit";
import menu from "../redux/features/menu-slice";
import footerMenu from "../redux/features/footer-menu-slice";

export const store = configureStore({
  reducer: {
    menu,
    footerMenu
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
