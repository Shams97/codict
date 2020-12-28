import { createContext, useState } from "react";

export const allNoneCtx = createContext({ all: false, none: false });

export default function NoneAllCtx({ children }) {
  const allNoneState = useState({ all: false, none: false });
  return (
    <allNoneCtx.Provider value={allNoneState}>{children}</allNoneCtx.Provider>
  );
}
