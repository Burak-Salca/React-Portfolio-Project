import React from 'react'
import { useLanguage } from '../actions/LangChange';

export default function Footer() {
  const {t} = useLanguage();

  return (
    <div className="flex flex-col gap-14 sm:h-[26rem] w-full mt-36 px-4 py-20 sm:p-0 sm:pl-[20%] sm:pt-20 bg-[#F9F9F9] dark:bg-[#141414]">
        <h1 className="font-Inter font-semibold text-[2.6rem] sm:w-[33.75rem] sm:h-[6.6rem] text-[#1F2937]  text-center sm:text-start dark:text-[#AEBCCF] ">
        {t.letsWork}</h1>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:w-3/4">
          <div className="flex gap-0.5 justify-center sm:justify-start">
          <h2>👉</h2>
          <a href='mailto:salcaburak@gmail.com' className="font-Inter font-medium text-xl underline text-[#AF0C48] dark:text-[#BAB2E7] ">salcaburak@gmail.com</a>
        </div>
        <div className="flex gap-5 justify-center sm:justify-start">
          <button className="font-Inter font-medium text-lg text-[#0A0A14] dark:text-[#AEBCCF]">{t.personalBlog}</button>
          <a href="https://github.com/Burak-Salca" target='_blank'>
          <button className="font-Inter font-medium text-lg text-[#00AB6B] ">Github</button>
          </a>
          <a href="https://www.linkedin.com/in/burak-sal%C3%A7a-5473501b6/" target='_blank' >
          <button className="font-Inter font-medium text-lg text-[#0077B5] ">Linkedin</button>
          </a>
        </div>
      </div>
    </div>
  )
}
