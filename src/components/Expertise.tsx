import React from 'react';
import { EXPERTISE_LIST } from '../constants';

const Expertise: React.FC = () => {
  return (
    <section className="section-container bg-background text-foreground border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <h2 className="section-title mb-0">Core Expertise</h2>
          <p className="text-muted-foreground mt-4 md:mt-0 max-w-sm text-right">
            Specialized skills tailored for high-impact AI deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {EXPERTISE_LIST.map((item) => (
            <div key={item.id} className="group border-t border-border pt-8 hover:border-primary transition-colors duration-300">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 mb-4">
                <span className="text-primary font-serif text-5xl md:text-6xl opacity-90 group-hover:opacity-100 transition-opacity">
                  {item.number}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold font-serif group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg ml-auto sm:pl-16">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
