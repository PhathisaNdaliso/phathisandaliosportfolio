import React from 'react';
import { EXPERIENCE_LIST } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-container bg-background text-foreground border-b border-border scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">
          Professional <span className="text-primary">Journey</span>
        </h2>

        <div className="space-y-12">
          {EXPERIENCE_LIST.map((job) => (
            <div key={job.id} className="border-l-2 border-primary pl-8 md:pl-12 py-2 relative">
              {/* Decorative dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary glow-orange"></div>
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2 leading-tight">{job.role}</h3>
                  <p className="text-xl text-muted-foreground font-mono flex flex-wrap gap-2 items-center">
                    {job.company} 
                    <span className="text-primary mx-1">•</span> 
                    {job.type}
                  </p>
                </div>
                <div className="text-left md:text-right mt-4 md:mt-0">
                  <p className="text-primary font-mono font-bold">{job.period}</p>
                  <p className="text-sm text-muted-foreground mt-1">{job.location}</p>
                </div>
              </div>

              <p className="text-lg text-muted-foreground font-light mb-10 max-w-4xl leading-relaxed">
                {job.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4 border-b border-border pb-2">Core Focus</h4>
                  <ul className="space-y-3">
                    {job.focusAreas.map((area, idx) => (
                      <li key={idx} className="flex items-start text-muted-foreground font-light">
                        <span className="mr-3 text-primary text-lg leading-none">›</span>
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4 border-b border-border pb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, idx) => (
                      <span key={idx} className="tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
