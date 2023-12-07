import { configureStore } from "@reduxjs/toolkit";
import menu from "../redux/features/menu-slice";

export const store = configureStore({
  reducer: {
    menu,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
