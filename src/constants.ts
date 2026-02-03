import { Project, Expertise, Experience } from './types';

export const EXPERTISE_LIST: Expertise[] = [
  {
    id: 'exp1',
    number: '01',
    title: 'Generative AI & LLMs',
    description: 'Developing custom content generators and chatbots tailored to specific domain needs.',
  },
  {
    id: 'exp2',
    number: '02',
    title: 'Responsible AI',
    description: 'Auditing models for bias and ensuring algorithmic fairness in critical decision-making systems.',
  },
  {
    id: 'exp3',
    number: '03',
    title: 'Data Science & Python',
    description: 'Leveraging Pandas and NumPy for complex data analysis to derive actionable insights.',
  },
  {
    id: 'exp4',
    number: '04',
    title: 'Full-Stack AI Integration',
    description: 'Connecting Vision, Speech, and Language APIs into cohesive, user-friendly web applications.',
  },
];

export const EXPERIENCE_LIST: Experience[] = [
  {
    id: 'exp_capaciti',
    role: 'Digital Associate',
    company: 'Capaciti AI Bootcamp',
    type: 'Internship',
    period: 'Dec 2025 – Current',
    location: 'Johannesburg, Gauteng',
    description: 'Developed and deployed 4–5 AI-powered tools, focusing on multi-modal API integration and LLM scaling. Conducted rigorous bias audits on financial datasets to mitigate age-based discrimination.',
    focusAreas: [
      'Multi-modal API integration (Vision, Language, Speech)',
      'LLM scaling and deployment strategies',
      'Rigorous bias audits on financial datasets',
      'Algorithmic fairness implementation',
    ],
    skills: [
      'Microsoft Azure',
      'Full-Stack Development',
      'Artificial Intelligence (AI)',
      'React.js',
      'Python',
      'Machine Learning',
      'Prompt Engineering',
      'Bias Auditing'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Contract Guard',
    category: 'Capstone Project',
    mission: 'Built a multi-modal tool for legal accessibility using Vision and Speech APIs to simplify complex South African legal jargon.',
    tech: ['Python', 'OpenAI', 'Azure AI', 'React', 'Vision & Speech APIs'],
    impact: 'Increased accessibility to legal understanding for non-experts through multi-modal interaction.',
    links: {
      demo: 'https://capeitinitiative.sharepoint.com/sites/D12/_layouts/15/stream.aspx?id=%2Fsites%2FD12%2FShared+Documents%2FGeneral%2FContractGuard+-+AI+Contract+Analysis+-+Personal+-+Microsoft%E2%80%8B+Edge+2026-01-27+20-34-41.mp4&ga=1&startedResponseCatch=true&referrer=StreamWebApp.Web&referrerScenario=AddressBarCopied.view.57ac3ded-827c-40bf-b294-4ca518ee7b39',
      github: 'https://github.com/PhathisaNdaliso/contractguard',
    },
  },
  {
    id: 'p2',
    title: 'Bias Audit - Financial Credit Scoring',
    category: 'Responsible AI',
    mission: 'Investigated age-based bias in automated lending; implemented Reweighing and Threshold Moving strategies to ensure fairness.',
    tech: ['Python', 'Fairness Indicators', 'Reweighing', 'Threshold Moving'],
    impact: 'Implemented Reweighing and Threshold Moving strategies to ensure equitable lending practices.',
    links: {
      demo: '#', 
      github: 'https://github.com/PhathisaNdaliso/Bias-Audit-',
    },
  },
  {
    id: 'p3',
    title: 'NeuroTone Dashboard',
    category: 'AI Analytics',
    mission: 'AI-powered sentiment analysis tool that processes text and speech to visualize emotional data for actionable insights.',
    tech: ['Python', 'NLP', 'Sentiment Analysis', 'React'],
    impact: 'Enabled real-time sentiment tracking to improve customer satisfaction scores.',
    links: {
      demo: '#',
      github: 'https://github.com/PhathisaNdaliso/NeuroTone-sentiment-analyzer',
    },
  },
  {
    id: 'p4',
    title: 'Smart Career Craft',
    category: 'AI Prototype',
    mission: 'An AI-driven, ATS-optimized resume builder tailored to modern job requirements.',
    tech: ['AI', 'React', 'ATS Optimization'],
    impact: 'Streamlines resume creation for modern job markets.',
    links: {
      demo: 'https://smart-career-craft-53.lovable.app',
      github: 'https://github.com/PhathisaNdaliso/The-plug',
    },
  },
  {
    id: 'p5',
    title: 'Vibe Craftr',
    category: 'Generative AI',
    mission: 'Developed using Google AI Studio to assist event planners in generating visual assets and posters.',
    tech: ['Google AI Studio', 'Generative AI'],
    impact: 'Accelerates the design process for event organizers by automating visual asset creation.',
    links: {
      demo: 'https://vibe-craftr-89.lovable.app',
      github: 'https://github.com/PhathisaNdaliso/vibe-craftr-89',
    },
  },
  {
    id: 'p6',
    title: 'Learning Gap Detector',
    category: 'EdTech AI',
    mission: 'A targeted AI prototype built for the EdTech sector to identify and address educational disparities.',
    tech: ['AI Analytics', 'EdTech'],
    impact: 'Identifies and addresses educational disparities to enable targeted interventions.',
    links: {
      demo: 'https://v0-learning-gap-detector-app.vercel.app',
      github: 'https://github.com/PhathisaNdaliso/v0-learning-gap-detector-app',
    },
  },
  {
    id: 'p7',
    title: 'AI Concept Chatbot',
    category: 'Conversational AI',
    mission: 'An exploration of conversational flow and natural language understanding fundamentals.',
    tech: ['NLP', 'Conversational Flow'],
    impact: 'Demonstrated core principles of NLU and conversational design using Chatbase.',
    links: {
      demo: 'https://www.chatbase.co/muzSKsB2T4U1uOymVyb8d/help',
      github: 'https://github.com/PhathisaNdaliso/NovaLearn',
    },
  },
];

export const BIO = {
  name: 'Phathisa Ndaliso',
  age: 23,
  headline: 'Crafting Intelligence That Connects People.',
  body: "I am a results-driven AI Developer with a deep passion for building ethical, high-impact technology. Specialized in AI systems through the Capaciti AI Bootcamp, I focus on bridging the gap between complex data and human accessibility. My expertise lies in integrating Vision, Language, and Speech APIs to solve real-world challenges—ranging from legal accessibility with Contract Guard to auditing financial models for age-based bias. I am committed to developing transparent, accessible intelligent systems that empower the South African community.",
  education: 'National Diploma in Software Development | IIE Rosebank College 2023-2025',
  email: 'phathisandali05@gmail.com',
  location: 'Johannesburg, Gauteng',
  languages: ['English', 'isiXhosa'],
  driversLicense: 'No',
  technicalProficiencies: ['AI/ML', 'Web Development', 'Programming', 'Prompt Engineering'],
  softSkills: ['Strategic Leadership', 'Communication', 'Problem Solving', 'Productivity'],
  interests: ['Legal Tech', 'Ethical AI'],
  achievements: [
    'Coursera certifications | Professional Development Badge | 2026',
    'Coursera certifications | Artificial Intelligence Bootcamp | 2026'
  ],
  socials: {
    linkedin: 'https://www.linkedin.com/in/phathisa-ndaliso',
    github: 'https://github.com/PhathisaNdaliso',
  }
};
