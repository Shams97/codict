import { createContext, useState } from "react";

const defaultValue = [];

export const wordsCtx = createContext(defaultValue);

export default function wordsProvider({ children }) {
  const value = useState("dark");
  return <wordsCtx.Provider value={value}>{children}</wordsCtx.Provider>;
}
