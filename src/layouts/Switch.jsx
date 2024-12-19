import React from "react";
import { useLanguage } from "../actions/LangChange";
import { useTheme } from "../actions/ThemeChange";

export default function Switch() {
  const { t, handleLanguageChange } = useLanguage();
  const { handleThemeChange, theme } = useTheme();
  return (
    <div className="flex gap-3.5 mt-6 justify-end">

            <label className="inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    value={theme}
                    className="sr-only peer"
                    onChange={handleThemeChange} />
                <div
                    className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                </div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 text-white dark:text-black">
                    {theme === "light" ? "LIGHT MODE" : "DARK MODE"}
                </span>
            </label>
            <span>|</span>
            <button onClick={handleLanguageChange}>
                <h1>
                    <span className="font-bold text-specialWhite dark:text-specialBlue" >{t.buttonText.firstPart}</span>
                    <span className="font-bold" > {t.buttonText.secondPart}</span>
                </h1>
            </button>
        </div>
  );
}