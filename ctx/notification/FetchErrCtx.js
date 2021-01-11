import { createContext, useState } from "react";

export const fetchErr = createContext(new Set());

export default function FetchErrCtx({ children }) {
  const fetchErrState = useState(new Set());
  return (
    <fetchErr.Provider value={fetchErrState}>{children}</fetchErr.Provider>
  );
}
