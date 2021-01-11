import { createContext, useState } from "react";

const defaultValue = {
  next: false,
  formData: {
    name: "",
    sound: "",
    description: "",
    usedIn: {
      languages: new Set(),
      os: new Set(),
      frameWorks: new Set(),
      principles: new Set(),
    },
  },
};
export const newFormCTX = createContext(defaultValue);

export default function NewFormCtx({ children }) {
  const value = useState({
    next: false,
    formData: {
      name: "",
      sound: "",
      description: "",
      usedIn: {
        languages: new Set(),
        os: new Set(),
        frameWorks: new Set(),
        principles: new Set(),
      },
    },
  });

  return <newFormCTX.Provider value={value}>{children}</newFormCTX.Provider>;
}
