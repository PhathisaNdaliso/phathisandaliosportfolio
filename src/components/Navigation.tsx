import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-4 md:px-6 py-4 flex justify-between items-center pointer-events-none">
      <div className="pointer-events-auto">
        <a href="#" className="font-serif font-bold text-xl md:text-2xl tracking-tighter text-white">PN.</a>
      </div>
      <div className="pointer-events-auto flex gap-4 md:gap-8">
        <a href="#about" className="text-[10px] md:text-sm font-mono font-bold tracking-widest hover:text-primary transition-colors uppercase text-white">About</a>
        <a href="#experience" className="text-[10px] md:text-sm font-mono font-bold tracking-widest hover:text-primary transition-colors uppercase text-white">Experience</a>
        <a href="#projects" className="text-[10px] md:text-sm font-mono font-bold tracking-widest hover:text-primary transition-colors uppercase text-white">Work</a>
        <a href="#contact" className="text-[10px] md:text-sm font-mono font-bold tracking-widest hover:text-primary transition-colors uppercase text-white">Contact</a>
      </div>
    </nav>
  );
};

export default Navigation;
