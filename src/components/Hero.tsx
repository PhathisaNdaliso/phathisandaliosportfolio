import React, { useState, useEffect } from 'react';
import { BIO, EXPERIENCE_LIST, PROJECTS } from '../constants';
import portraitImage from '@/assets/portrait.jpg';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(150);

  const toRotate = [
    `Hi, I am ${BIO.name}`,
    "AI Developer",
    "Software Developer",
    "Ethical AI Specialist",
    "Full Stack Developer"
  ];
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, delta]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(150);
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Phathisa_Ndaliso_CV.pdf';
    link.download = 'Phathisa_Ndaliso_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row bg-background overflow-hidden border-b border-border">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-20 z-10">
        
        {/* Animated Typing Text */}
        <div className="min-h-[160px] md:min-h-[240px] flex items-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif text-foreground tracking-tight leading-tight">
            {text}
            <span className="text-primary animate-blink ml-1">|</span>
          </h1>
        </div>
        
        <div className="max-w-md mt-8">
          <div className="h-1 w-20 bg-primary mb-6"></div>
          <p className="text-xl md:text-2xl font-light text-muted-foreground leading-relaxed mb-8">
            Building AI Solutions that Prioritize <span className="text-foreground font-semibold">Accessibility</span> and <span className="text-foreground font-semibold">Ethics</span>.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={handleDownloadResume}
              className="btn-hero"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download CV
            </button>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-1/2 relative h-[50vh] lg:h-auto group">
        <div className="absolute inset-0 bg-primary/10 z-10 mix-blend-overlay pointer-events-none group-hover:bg-primary/20 transition-colors duration-700"></div>
        <img 
          src={portraitImage}
          alt="Phathisa Ndaliso" 
          className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 ease-in-out"
        />
        
        {/* Decorative Overlay for Mobile */}
        <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-background via-background/50 to-transparent w-full z-20 lg:hidden">
          <p className="text-primary font-mono text-sm tracking-widest uppercase">AI Developer • Ethical Specialist</p>
        </div>
      </div>
      
      {/* Floating Badge for Desktop */}
      <div className="hidden lg:block absolute bottom-12 right-12 z-20">
        <div className="bg-background/80 backdrop-blur border border-primary/30 p-4 rounded-full">
          <p className="text-primary font-mono text-xs tracking-widest uppercase text-center">
            AI Developer<br/>Ethical Specialist
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
