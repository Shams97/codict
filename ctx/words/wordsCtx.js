import { createContext, useState } from "react";

const defaultValue = [];

export const wordsCtx = createContext(defaultValue);

export default function wordsProvider({ children }) {
  const value = useState([]);
  return <wordsCtx.Provider value={value}>{children}</wordsCtx.Provider>;
}
