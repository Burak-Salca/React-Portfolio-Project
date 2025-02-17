import React from 'react'
import { useLanguage } from '../actions/LangChange';


export default function Hero() {
  
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">

      <div className="flex-1 space-y-6">

        <div className="flex gap-4 h-[1.75rem] items-center">
          <div className="w-24 h-0 border border-[#4338CA] dark:border-specialWhite"></div>
          <span className="text-xl font-medium font-Inter text-[#4338CA] dark:text-specialWhite">Burak Salça</span>
        </div>

        <div className="text-center sm:text-left">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-Inter text-[#1F2937] dark:text-specialWhite">{t.heroh1}</h1>
        </div>

        <div>
          <h2 className="text-center sm:text-left font-normal text-base sm:text-lg font-Inter text-[#6B7280] dark:text-[#FFFFFF]">{t.heroh2}</h2>
        </div>

        <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-3">
          <button className="border rounded-md px-6 py-3 font-Inter font-medium text-lg bg-[#3730A3] text-[#FFFFFF] border-[#3730A3] dark:bg-specialWhite dark:text-[#383838] dark:border-specialWhite">

          <a 
            href="https://docs.google.com/document/d/1xjPujKvgP4RprUU1EtByAnu19lS1HBiDPHHz3PQlv8s/export?format=pdf"
            target="_blank"
            className="font-Inter font-medium text-lg hover:text-blue-400 duration-300 ease-in-out"
          >
            📄 CV</a>

          </button>

          <a 
          href="https://github.com/Burak-Salca" 
          target="_blank" 
          rel="noopener noreferrer"
          className="border rounded-md px-6 py-3 text-[#3730A3] font-Inter font-medium text-lg flex justify-center items-center gap-1 bg-[#FFFFFF] border-[#3730A3] dark:bg-[#383838] dark:border-specialWhite">

            <img className="w-6 h-6 filter-logo-filter-light dark:filter-logo-filter-dark" src="\assets\github-mark.svg" />

            <p className="bg-[#FFFFFF] text-[#3730A3] dark:bg-[#383838] dark:text-specialWhite">Github</p>
          </a>

          <a 
          href="https://www.linkedin.com/in/burak-sal%C3%A7a-5473501b6/" 
          target="_blank" 
          rel="noopener noreferrer"
          
          className="border rounded-md px-6 py-3 text-[#3730A3] font-Inter font-medium text-lg 
          flex justify-center items-center gap-1 bg-[#FFFFFF] border-[#3730A3] dark:bg-[#383838] dark:border-specialWhite">

            <img className="w-6 h-6 filter-logo-filter-light dark:filter-logo-filter-dark " src="\assets\LI-In-Bug.svg"alt="LinkedIn"/>

            <p className="bg-[#FFFFFF] text-[#3730A3] dark:bg-[#383838] dark:text-specialWhite">Linkedin</p>
          </a>
        </div>
      </div>

      <div className="flex-1">
        <img src="\assets\foto.jpg" className="w-full sm:w-auto max-w-md rounded-3xl" /> 
      </div>

    </div>
  )
}
