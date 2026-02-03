import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const [showMore, setShowMore] = useState(false);
  
  // Initially show first 3 projects
  const initialProjects = PROJECTS.slice(0, 3);
  // Hide remaining projects initially
  const hiddenProjects = PROJECTS.slice(3);

  return (
    <section id="projects" className="section-container bg-background text-foreground scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="section-title">
            Featured <span className="text-primary">Work</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl font-light">
            A selection of projects demonstrating ethical AI auditing, generative models, and full-stack integration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {initialProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          
          {showMore && hiddenProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {!showMore && hiddenProjects.length > 0 && (
          <div className="flex justify-center">
            <button 
              onClick={() => setShowMore(true)}
              className="btn-outline flex items-center gap-4 group px-12 py-5"
            >
              View More Projects
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-y-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
