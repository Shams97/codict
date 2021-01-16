/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";
const defaultValue = {
  languages: { all: false, none: false, isNoneOption: false },
  os: { all: false, none: false, isNoneOption: false },
  frameWorks: { all: false, none: false, isNoneOption: false },
  principles: { all: false, none: false, isNoneOption: false },
};

// default context state
export const usedInCtx = createContext(defaultValue);

export default function UsedInContext({ children }) {
  // provided context state (what can be used and changed later in other components)
  const usedIn = useState(defaultValue);
  return <usedInCtx.Provider value={usedIn}>{children}</usedInCtx.Provider>;
}
