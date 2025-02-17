import React, { useState, useEffect } from 'react';
import ProjectMap from '../components/ProjectMap';
import { useLanguage } from '../actions/LangChange';
import axios from 'axios';

export default function Projects() {
  const { t } = useLanguage();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchPinnedRepos = async () => {
      try {
        const response = await axios({
          method: 'POST',
          url: 'https://api.github.com/graphql',
          headers: {
            'Authorization': `bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
            'Content-Type': 'application/json',
          },
          data: {
            query: `
              query {
                user(login: "Burak-Salca") {
                  pinnedItems(first: 6) {
                    edges {
                      node {
                        ... on Repository {
                          name
                          description
                          url
                          homepageUrl
                          languages(first: 3) {
                            nodes {
                              name
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            `
          }
        });

        const pinnedRepos = response.data.data.user.pinnedItems.edges.map(({ node }) => ({
          img: "/assets/project-default.png",
          title: node.name,
          description: node.description || "No description available",
          technologies: node.languages.nodes.map(lang => lang.name),
          githubLink: node.url,
          siteLink: node.homepageUrl || node.url
        }));

        setProjects(pinnedRepos);
      } catch (error) {
        console.error('Error fetching pinned repos:', error);
      }
    };

    fetchPinnedRepos();
  }, []);

  return (
    <div id="projects" className="flex flex-col gap-10">
      <div className="font-Inter font-semibold text-5xl text-[#1F2937] dark:text-specialWhite pt-4 text-center sm:text-start">
        {t.projects}
      </div>
      <div className="flex flex-wrap justify-between gap-10">
        {projects.map((project, index) => (
          <ProjectMap key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
