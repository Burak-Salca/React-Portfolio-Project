import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext();

export const useTheme = ()=> useContext(ThemeContext);

export default function ThemeChange({children}) {
    const [theme , setTheme] = useState("light");

    const handleThemeChange = ()=>{
        setTheme ((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    useEffect(() => {
        if (theme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }, [theme]);

  return (
    <ThemeContext.Provider value={{ handleThemeChange, theme }}>
        {children}
    </ThemeContext.Provider>
  );
}
