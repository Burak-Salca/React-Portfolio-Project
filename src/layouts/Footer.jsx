import React from 'react'
import { useLanguage } from '../actions/LangChange';

export default function Footer() {
  const {t} = useLanguage();

  return (
    <div id = "connect" className="flex flex-col gap-14 sm:h-[26rem] w-full mt-36 px-4 py-20 sm:p-0 sm:pl-[20%] sm:pt-20  text-[#1F2937] dark:text-[#AEBCCF] bg-[#F9F9F9] dark:bg-[#141414]">
        <h1 className="font-Inter font-semibold text-[2.6rem] sm:w-[33.75rem] sm:h-[6.6rem] text-[#1F2937]  text-center sm:text-start dark:text-[#AEBCCF] ">
        {t.letsWork}</h1>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:w-3/4 font-medium text-lg">
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4">
        <div className="flex items-center gap-2">
            <span>📧</span>
            <a href='mailto:salcaburak@gmail.com' className="font-Inter font-medium text-xl underline">
                salcaburak@gmail.com
            </a>
        </div>
        <div className="flex items-center gap-2">
            <span>📞</span>
            <a href="tel:+905079614688" className="font-Inter font-medium text-xl">
                0507 961 46 88
            </a>
        </div>
    </div>
        <div className="flex gap-5 justify-center sm:justify-start">
          <a 
            href="https://docs.google.com/document/d/1xjPujKvgP4RprUU1EtByAnu19lS1HBiDPHHz3PQlv8s/export?format=pdf"
            target="_blank"
            className="font-Inter font-medium text-lg hover:text-blue-400 duration-300 ease-in-out"
          >
            {t.resume}
          </a>
          <a href="https://github.com/Burak-Salca" target='_blank'>
            <button className="font-Inter font-medium text-lg">Github</button>
          </a>
          <a href="https://www.linkedin.com/in/burak-sal%C3%A7a-5473501b6/" target='_blank'>
            <button className="font-Inter font-medium text-lg">Linkedin</button>
          </a>
        </div>
      </div>
    </div>
  )
}
