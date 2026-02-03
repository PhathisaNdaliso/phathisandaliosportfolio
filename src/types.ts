export interface Project {
  id: string;
  title: string;
  category: string;
  mission: string;
  tech: string[];
  impact: string;
  links: {
    demo: string;
    github: string;
  };
}

export interface Expertise {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  description: string;
  focusAreas: string[];
  skills: string[];
}
