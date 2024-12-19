import React, { useState, createContext, useContext } from "react";
import translations from '../translation';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export default function LangChange({ children }) {
  const [language, setLanguage] = useState("tr");

  const handleLanguageChange = () => {
    setLanguage((prevLang) => (prevLang === "tr" ? "en" : "tr"));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ t, handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  );
}
