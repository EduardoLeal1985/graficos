import React, { createContext, useState, useContext } from "react";

import { COLORS, FONTS, SIZES } from "../constants";

const AuthContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeFile, setThemeFile] = useState(() => {
    const themeStorage = localStorage.getItem(
      `[@${process.env.REACT_APP_NAME}Theme]`
    );

    if (themeStorage) {
      return JSON.parse(themeStorage);
    }

    return {
      COLORS,
      FONTS,
      SIZES,
    };
  });

  return (
    <AuthContext.Provider
      value={{
        themeFile,
        setThemeFile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Must be used within a provider.");
  }

  return context;
};
