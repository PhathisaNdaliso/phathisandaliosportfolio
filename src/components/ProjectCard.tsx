import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isCapstone = project.category === 'Capstone Project';

  return (
    <div className="card-dark flex flex-col h-full group">
      <div className="mb-8">
        <span className="tag-orange">
          {project.category}
        </span>
        <h3 className="text-3xl md:text-4xl font-serif mt-6 mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
      </div>

      <div className="space-y-6 flex-grow font-light text-muted-foreground">
        <div>
          <strong className="text-foreground font-medium block mb-1 font-sans text-sm uppercase tracking-wide opacity-80">The Mission</strong>
          <p>{project.mission}</p>
        </div>
        
        <div>
          <strong className="text-foreground font-medium block mb-1 font-sans text-sm uppercase tracking-wide opacity-80">The Tech</strong>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tech.map((t, idx) => (
              <span key={idx} className="bg-secondary text-muted-foreground text-xs px-2 py-1 rounded">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div>
          <strong className="text-foreground font-medium block mb-1 font-sans text-sm uppercase tracking-wide opacity-80">The Impact</strong>
          <p>{project.impact}</p>
        </div>
      </div>

      <div className="mt-10 pt-8 border-t border-border flex flex-wrap gap-4">
        <a 
          href={project.links.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          {isCapstone ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
              </svg>
              Watch Demo
            </>
          ) : (
            'View Project'
          )}
        </a>
        <a 
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          GitHub Repo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
