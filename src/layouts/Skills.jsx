import React from 'react'
import { useLanguage } from '../actions/LangChange'; 
import SkillMap from '../components/SkillMap';

export default function Skills() {
  const { t } = useLanguage(); 
  const contexs = t.skillsList;

  return (
    <div id="skills" className="flex flex-col gap-10 sm:gap-8">
      <div>
        <h1 className="font-Inter font-semibold text-center sm:text-start text-5xl text-[#1F2937] dark:text-specialWhite">
          {t.skills}
        </h1>
      </div>
      <div className="flex flex-wrap gap-6 justify-between">
        {contexs.map((contex, index) => (
          <div key={index} className="flex-1 min-w-[200px] max-w-[300px]">
            <SkillMap title={contex.title} description={contex.description} />
          </div>
        ))}
      </div>
    </div>
  );
  
  
  
  
  
}
