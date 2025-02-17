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
    <div  >
    <header className="bg-white text-[#6B7280] py-4">
      <nav className="w-full flex justify-between items-center px-1">
        <span className="font-Inter font-semibold text-2xl text-[#FFFFFF] dark:text-[#252128] origin-center rotate-45 w-16 h-16 rounded-full flex justify-center items-center dark:bg-specialWhite bg-[#7B61FF]">
          B
        </span>
        <ul className="flex gap-6 items-center"> 
          <li>
            <a href="#skills" className="hover:text-specialWhite transition">
              {t.skills}
            </a>
          </li>
          <li>
            <a href="#profile" className="hover:text-specialWhite transition">
              Profil
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-specialWhite transition">
              {t.projects}
            </a>
          </li>
          <li>
            <a href="#connect" className=" dark:hover:text-specialWhite transition">
              İletişim
            </a>
          </li>
        </ul>
      </nav>
    </header>
  </div>
    
  )
}
