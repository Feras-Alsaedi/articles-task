"use client";

import { Provider } from "react-redux";
import { ReactNode } from "react";
import { store } from "./store";

interface ReduxProviderProps {
  children: ReactNode;
}

export default function ReduxProvider({ children }: ReduxProviderProps) {
  return <Provider store={store as typeof store}>{children}</Provider>;
}
