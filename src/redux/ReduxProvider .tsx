"use client";

import { Provider } from "react-redux";
import { store } from "@/store/store";
import { ReactNode } from "react";

interface ChildProps {
  children?: ReactNode;
}

function ReduxProvider({ children }: ChildProps) {
  return <Provider store={store}>{children}</Provider>;
}

export default ReduxProvider;
