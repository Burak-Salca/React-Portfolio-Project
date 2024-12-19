import React from 'react'
import { Route, Switch, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useLanguage } from '../actions/LangChange';

export default function Header() {
  const history = useHistory();
  const { t } = useLanguage();

  const handleHireMeClick = () => {
    history.push();
  };

  return (
    <div>
    <header className="bg-white text-[#6B7280] py-4">
      <nav className="w-full flex justify-between items-center px-1">
        <span className="font-Inter font-semibold text-2xl text-[#7B61FF] origin-center rotate-45 w-16 h-16 rounded-full flex justify-center items-center bg-[#EEEBFF] dark:bg-specialBlue">
          B
        </span>
        <ul className="flex gap-6 items-center"> 
          <li>
            <a href="#skills" className="hover:text-blue-400 transition">
              {t.skills}
            </a>
          </li>
          <li>
          <a href="#projects" className="hover:text-blue-400 transition">
              {t.projects}
            </a>
          </li>
          <li>
            <button
              onClick={handleHireMeClick}
              className="py-5 px-10 rounded-md border border-[#3730A3] !text-specialBlue bg-white">
              {t.hire}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  </div>
    
  )
}
