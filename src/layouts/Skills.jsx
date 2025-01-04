import React from 'react'
import { useLanguage } from '../actions/LangChange'; 
import SkillMap from '../components/SkillMap';

export default function Skills() {
  const { t } = useLanguage(); 
  

  const skills =  [
    {
      img: "\\assets\\javascript-svgrepo-com.svg",
      title: "Java Script"
    },
    {
      img: "assets\\react-svgrepo-com.svg",
      title: "React.Js"
    },
    {
      img: "assets\\java-svgrepo-com (2).svg",
      title: "Java"
    },
    {
      img: "assets\\postgresql-svgrepo-com.svg",
      title: "SQL/PostgreSQL "
    },
    {
      img: "assets\\spring-icon-svgrepo-com.svg",
      title: "Spring Boot"
    },
    {
      img: "assets\\postman-icon-svgrepo-com.svg",
      title: "Postman"
    },
    {
      img: "assets\\selenium-svgrepo-com.svg",
      title: "Selenium"
    },
    {
      img: "assets\\jira-svgrepo-com.svg",
      title: "Jira"
    }
  ];

  return (
    <div id="skills" className="flex flex-col gap-10 sm:gap-8">
      <div>
        <h1 className="font-Inter font-semibold text-center sm:text-start text-5xl text-[#1F2937] dark:text-specialWhite">
          {t.skills}
        </h1>
      </div>
      <div className="flex flex-wrap gap-12 justify-between mt-4 mb-8">
        {skills.map((skill, index) => (
          <div key={index} className="flex-1 min-w-[200px] max-w-[300px]">
            <SkillMap title={skill.title} image={skill.img} />
          </div>
        ))}
      </div>
    </div>
  );
  
  
  
  
  
}
