import { createContext, useContext, useState } from "react";

const AppearanceContext = createContext();

function AppearanceProvider({ children }) {
  const darkTheme = {
    name: "dark",
    primary: "#000",
    secondary: "#16181c",
    tertiary: "#212327",
    modal: "#5b708366",
  };

  const dimTheme = {
    name: "dim",
    primary: "#15202b",
    secondary: "#1e2732",
    tertiary: "#263340",
    modal: "#5b708366",
  };

  const lightTheme = {
    name: "light",
    primary: "#fff",
    secondary: "#f7f7f9",
    tertiary: "#eff3f4",
    modal: "#00000066",
  };

  const darkShadow =
    "rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px";

  const dimShadow =
    "rgba(136, 153, 166, 0.2) 0px 0px 15px, rgba(136, 153, 166, 0.15) 0px 0px 3px 1px";

  const lightShadow =
    "rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px";

  const [backgroundColor, setBackgroundColor] = useState(lightTheme);

  const [generalColor, setGeneralColor] = useState({
    primary: "#1d9bf0",
    secondary: "#8ecdf8",
    base: "#0f1419",
    baseSecondary: "#536471",
  });

  const [fontSize, setFontSize] = useState(15);
  const [boxShadow, setBoxShadow] = useState(lightShadow);

  function handleDarkTheme() {
    setBackgroundColor(darkTheme);
    setBoxShadow(darkShadow);
    setGeneralColor((color) => ({
      ...color,
      base: "#e7e9ea",
      baseSecondary: "#71767b",
    }));
  }
  function handleDimTheme() {
    setBackgroundColor(dimTheme);
    setBoxShadow(dimShadow);
    setGeneralColor((color) => ({
      ...color,
      base: "#e7e9ea",
      baseSecondary: "#8b98a5",
    }));
  }
  function handleLightTheme() {
    setBackgroundColor(lightTheme);
    setBoxShadow(lightShadow);
    setGeneralColor((color) => ({
      ...color,
      base: "#0f1419",
      baseSecondary: "#536471",
    }));
  }

  return (
    <AppearanceContext.Provider
      value={{
        backgroundColor,
        setBackgroundColor,
        generalColor,
        setGeneralColor,
        fontSize,
        setFontSize,
        boxShadow,
        setBoxShadow,
        handleDarkTheme,
        handleDimTheme,
        handleLightTheme,
      }}
    >
      {children}
    </AppearanceContext.Provider>
  );
}

export function useAppearance() {
  const context = useContext(AppearanceContext);
  return context;
}

export default AppearanceProvider;
