import React from 'react'
import translations from '../translation';
import ProjectMap from '../components/ProjectMap';
import { useLanguage } from '../actions/LangChange';

export default function Projects() {
  const {t} =useLanguage();

  const projects = [
    {
      img: "\\public\\image\\project1.png",  
      title: t.projectsTitle.first,  
      description: t.projectsParagraph.first,
      technologies: ["react", "redux", "axios"],
    },
    {
      img: "\\public\\image\\project2.png",
      title: t.projectsTitle.second,
      description: t.projectsParagraph.second,
      technologies: ["react", "tailwind", "toastify"],
    }
  ];

  return (
    <div id="projects" className="flex flex-col gap-10">
      <div className="font-Inter font-semibold text-5xl text-[#1F2937] dark:text-specialWhite pt-10 text-center sm:text-start">
        {t.projects}
      </div>
      <div className="flex flex-wrap justify-between gap-10">
        {projects.map((project, index) => (
        <ProjectMap key={index} project={project} />
        ))}
      </div>
    </div>
  )
}
