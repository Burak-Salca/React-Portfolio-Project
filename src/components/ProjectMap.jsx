import React from 'react'
import { useLanguage } from '../actions/LangChange';

export default function ProjectMap(props) {
    const {project} = props;
    const {t}= useLanguage();

  return (
    <div className="bg-white dark:bg-[#1F2937] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow h-[300px] flex flex-col">
      <div className="h-[90px]">
        <h3 className="font-Inter font-medium text-xl text-[#433BCA] dark:text-[#B7AAFF] ">
          {project.title}
        </h3>
      </div>
      
      <div className="flex flex-wrap gap-1.5 flex-grow">
        {project.technologies.map((tech, index) => (
          <div key={index} className="h-[27px] px-4 border rounded font-Inter font-medium text-sm flex justify-center items-center bg-[#FFFFFF] border-[#3730A3] dark:bg-[#383838] dark:border-[#8F88FF]">
            <p className="text-[#3730A3] dark:text-[#8F88FF] whitespace-nowrap">{tech}</p>
          </div>
        ))}
      </div>
      
      <div className="h-[40px] flex justify-between items-center mt-8">
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          <button className="font-Inter font-medium text-base underline text-[#3730A3] dark:text-specialWhite">Github</button>
        </a>
        <a href={project.siteLink} target="_blank" rel="noopener noreferrer">
          <button className="font-Inter font-medium text-base underline text-[#3730A3] dark:text-specialWhite">
            {t.viewSite}
          </button>
        </a>
      </div>
    </div>
  );
}
