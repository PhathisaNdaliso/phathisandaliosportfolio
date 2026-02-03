import React from 'react';
import { BIO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-background text-foreground overflow-hidden" id="contact">
      {/* Top CTA Section */}
      <div className="py-24 md:py-32 px-6 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-7xl lg:text-8xl font-serif font-bold uppercase tracking-tight leading-none mb-12 max-w-5xl">
          Let's Build Something<br className="hidden md:block" /> Extraordinary Together
        </h2>
        
        <a 
          id="footer-cta"
          href={`mailto:${BIO.email}`}
          className="group relative flex items-center gap-3 bg-primary text-foreground px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform duration-300 scroll-mt-20"
        >
          <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center text-primary group-hover:bg-background group-hover:text-foreground transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </div>
          Work with Me
        </a>
      </div>

      {/* Marquee Section */}
      <div className="border-y border-border py-6 overflow-hidden select-none">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4">
              <span className="text-xl md:text-3xl font-light text-muted-foreground uppercase tracking-widest">
                Creative Collaboration Is The Key To Meaningful Design
              </span>
              <span className="text-primary text-3xl">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Massive Name Display */}
      <div className="relative pt-12 md:pt-20">
        <div className="flex justify-center overflow-hidden">
          <h1 className="text-[25vw] md:text-[20vw] font-serif font-bold leading-none tracking-tighter text-foreground opacity-100 select-none">
            NDALISO
          </h1>
        </div>
      </div>

      {/* Bottom Information Bar */}
      <div className="bg-primary text-primary-foreground py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          
          <div className="max-w-xs w-full">
            <p className="text-sm font-semibold mb-6 opacity-80 uppercase tracking-wider">Connect with me</p>
            <div className="flex gap-6 mb-8">
              <a href={BIO.socials.github} target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-200" aria-label="GitHub">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href={BIO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-200" aria-label="LinkedIn">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
            <p className="text-[10px] uppercase font-bold tracking-widest leading-relaxed">
              I transform innovative ideas into reality through thoughtful design and meaningful AI interactions.
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-12 w-full md:w-auto">
            <nav className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-bold uppercase tracking-widest">
              <a href="#about" className="hover:underline underline-offset-4 decoration-primary-foreground/50">About</a>
              <a href="#projects" className="hover:underline underline-offset-4 decoration-primary-foreground/50">Projects</a>
              <a href="#footer-cta" className="hover:underline underline-offset-4 decoration-primary-foreground/50">Contact</a>
            </nav>
            <div className="flex flex-col md:items-end text-left md:text-right">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">
                Copyright © {BIO.name} {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
