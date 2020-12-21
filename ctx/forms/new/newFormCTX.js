import { createContext, useState } from "react";

const defaultValue = { next: false };
export const newFormCTX = createContext(defaultValue);

export default function NewFormCtx({ children }) {
  const value = useState({
    next: false,
    formData: {
      name: "",
      sound: "",
      description: "",
      usedIn: { languages: [], os: [], frameWorks: [], principles: [] },
    },
  });

  return <newFormCTX.Provider value={value}>{children}</newFormCTX.Provider>;
}
