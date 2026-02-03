import Hero from '@/components/Hero';
import About from '@/components/About';
import Expertise from '@/components/Expertise';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

const Index = () => {
  return (
    <main className="bg-background min-h-screen text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Expertise />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
};

export default Index;
