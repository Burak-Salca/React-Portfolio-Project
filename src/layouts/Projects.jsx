import React, { useState, useEffect } from 'react';
import { useLanguage } from '../actions/LangChange';
import ProjectMap from '../components/ProjectMap';
import { motion, AnimatePresence } from 'framer-motion';

export default function Projects() {
  const { t } = useLanguage();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Burak-Salca/repos?sort=pushed&direction=desc&per_page=100');
        const allProjects = await response.json();
        
        // Her repo için topics'leri çek
        const projectsWithTopics = await Promise.all(
          allProjects
            .filter(project => project.stargazers_count > 0)
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .map(async (project) => {
              // Topics'leri çekmek için ayrı bir istek
              const topicsResponse = await fetch(`https://api.github.com/repos/Burak-Salca/${project.name}/topics`, {
                headers: {
                  'Accept': 'application/vnd.github.mercy-preview+json'
                }
              });
              const { names: topics } = await topicsResponse.json();
              
              return {
                title: project.name,
                githubLink: project.html_url,
                siteLink: project.homepage || project.html_url,
                technologies: [...new Set([...topics, project.language].filter(Boolean))]
              };
            })
        );
        
        setProjects(projectsWithTopics);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#3730A3]"></div>
      </div>
    );
  }

  return (
    <div id="projects" className="flex flex-col gap-10">
      <div className="font-Inter font-semibold text-5xl text-[#1F2937] dark:text-specialWhite border-t border-[#BAB2E7] pt-10 text-center sm:text-start">
        {t.projects}
      </div>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ProjectMap project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
