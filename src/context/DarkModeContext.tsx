import React, { createContext, useContext, useEffect } from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";

type DarkModeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

// used for children
type DarkModeProviderProps = {
  children: React.ReactNode;
};

const DarkModeContext = createContext<DarkModeContextType>({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    "isDarkMode",
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;

export function useDarkMode(): DarkModeContextType {
  const context = useContext(DarkModeContext);

  if (context === undefined)
    throw new Error("DarkModeContext was used outside of DarkModeProvider");

  return context;
}
