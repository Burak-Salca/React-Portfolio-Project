import React from 'react'

export default function SkillMap(props) {
   const {title,description} = props;
  return (
    <div className="flex flex-col gap-7 text-center sm:text-start">
        <h2 className="font-Inter font-medium text-3xl text-[#433BCA] dark:text-[#B7AAFF] ">{title}</h2>
        <p className="font-Inter font-normal text-xs text-[#6B7280] dark:text-[#FFFFFF]  px-16 sm:px-0">{description}</p>
    </div>
  )
}
