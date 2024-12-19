import React from 'react'
import { useLanguage } from '../actions/LangChange';


export default function Profile() {
    const { t } = useLanguage(); 

  return (
    <div className="flex flex-col gap-10" >
      <div className="font-Inter font-semibold text-5xl text-[#1F2937]   text-center sm:text-start dark:text-specialWhite">
      {t.profile}
      </div>
      <div className="flex flex-col gap-10 sm:flex-row sm:gap-14 text-center sm:text-start">
        <div className="flex flex-col gap-5">
          <h2 className="font-Inter font-medium text-3xl text-[#433BCA] dark:text-[#B7AAFF] ">{t.profile}</h2>
          <div className="flex justify-between sm:justify-start sm:gap-6 ">
            <div className="flex flex-col gap-4 font-semibold font-Inter text-lg w-1/2 sm:w-auto text-start" >
              <h3 className="sm:text-nowrap">{t.dateOfBirth}</h3>
              <h3 className="sm:text-nowrap">{t.city}</h3>
              <h3 className="sm:text-nowrap">{t.education}</h3>
              <h3 className="sm:text-nowrap mt-[6.3rem] sm:mt-[4.5rem]">{t.preferredRole}</h3>
            </div>
            <div className="flex flex-col gap-4 font-normal font-Inter text-lg w-1/2 sm:w-80 text-end sm:text-start">
              <h3>20.01.1999</h3>
              <h3>Eskişehir</h3>
              <h3>{t.educationDetail.firstPart}</h3>
              <h3>{t.educationDetail.secondPart}</h3>
              <h3>Backend, Frontend</h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="font-Inter font-medium text-3xl text-[#433BCA] dark:text-[#B7AAFF]  ">{t.aboutMe}</h2>
          <div className="flex flex-col gap-5">
            <h3 className="font-normal text-lg font-Inter text-[#6B7280] dark:text-[#FFFFFF]">{t.aboutMeParagraph.firstPart}</h3>
            <h3 className="font-normal text-lg font-Inter text-[#6B7280] dark:text-[#FFFFFF]">{t.aboutMeParagraph.secondPart}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
