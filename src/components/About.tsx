import React from 'react';
import { BIO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="section-container bg-background text-foreground border-b border-border scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h2 className="section-title">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="space-y-6">
              <div className="card-dark">
                <h4 className="text-primary text-xs font-mono uppercase tracking-widest mb-4">Education</h4>
                <p className="font-serif text-lg leading-tight">{BIO.education}</p>
              </div>
              <div className="card-dark">
                <h4 className="text-primary text-xs font-mono uppercase tracking-widest mb-4">Interests</h4>
                <div className="flex flex-wrap gap-2">
                  {BIO.interests.map(item => (
                    <span key={item} className="px-3 py-1 bg-secondary text-xs rounded-full">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3 space-y-12">
            <p className="text-2xl md:text-3xl font-light leading-relaxed text-muted-foreground">
              {BIO.body}
            </p>
            
            <div className="pt-8">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 border-b border-border pb-2">Technical Proficiency</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {BIO.technicalProficiencies.map(skill => (
                  <li key={skill} className="text-muted-foreground font-light flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
