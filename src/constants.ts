import { Project, Expertise, Experience } from './types';

export const EXPERTISE_LIST: Expertise[] = [
  {
    id: 'exp1',
    number: '01',
    title: 'AI & LLM Integration',
    description: 'Building AI-powered features using language models and APIs for real-world applications.',
  },
  {
    id: 'exp2',
    number: '02',
    title: 'Responsible & Ethical AI',
    description: 'Auditing datasets and models to reduce bias and improve fairness in decision-making systems.',
  },
  {
    id: 'exp3',
    number: '03',
    title: 'Full-Stack Development',
    description: 'Designing and building end-to-end applications with clean UI, secure APIs, and scalable logic.',
  },
  {
    id: 'exp4',
    number: '04',
    title: 'Problem-Focused Software Design',
    description: 'Turning complex requirements into intuitive, user-friendly solutions.',
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
    description: 'Developed and deployed 4–5 AI-powered tools, worked on multi-modal API integration and LLM scaling, conducted bias audits on financial datasets to reduce age-based discrimination, and applied responsible AI practices in real-world use cases.',
    focusAreas: [
      'Multi-modal APIs (Vision, Language, Speech)',
      'LLM integration and scaling',
      'Bias auditing and ethical AI',
    ],
    skills: [
      'Microsoft Azure',
      'Artificial Intelligence (AI)',
      'React.js',
      'Python',
      'Machine Learning',
      'Prompt Engineering',
      'Bias Auditing'
    ]
  },
  {
    id: 'exp_capaciti_swe',
    role: 'Software Engineering Associate',
    company: 'Capaciti',
    type: 'Programme',
    period: 'Feb 2026 – Current',
    location: 'Johannesburg, Gauteng',
    description: 'Developing full-stack applications and deploying production-ready systems that solve real-world problems. Working across frontend, backend, and API layers with an emphasis on clean architecture and usability.',
    focusAreas: [
      'Developing full-stack applications',
      'Deploying production-ready systems that solve real-world problems',
      'Working across frontend, backend, and API layers',
      'Emphasizing clean architecture and usability',
    ],
    skills: [
      'Full-Stack Development',
      'React.js',
      'TypeScript',
      'Node.js',
      'REST APIs',
      'Clean Architecture'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Contract Guard',
    category: 'Capstone Project — AI-Powered Contract Analysis Tool',
    mission: 'Help users understand fine-print contracts by identifying risks and potential loopholes.',
    tech: ['Python', 'LLMs', 'React', 'AI APIs'],
    impact: 'Improved accessibility to legal information for non-technical users.',
    links: {
      demo: 'https://capeitinitiative.sharepoint.com/sites/D12/_layouts/15/stream.aspx?id=%2Fsites%2FD12%2FShared+Documents%2FGeneral%2FContractGuard+-+AI+Contract+Analysis+-+Personal+-+Microsoft%E2%80%8B+Edge+2026-01-27+20-34-41.mp4&ga=1&startedResponseCatch=true&referrer=StreamWebApp.Web&referrerScenario=AddressBarCopied.view.57ac3ded-827c-40bf-b294-4ca518ee7b39',
      github: 'https://github.com/PhathisaNdaliso/contractguard',
    },
  },
  {
    id: 'p2',
    title: 'IT Ticketing System',
    category: 'Role-Based Support Management Platform',
    mission: 'Allow users to log technical issues while enabling admins and technicians to manage and resolve tickets efficiently.',
    tech: ['Full-Stack', 'React', 'Node.js', 'REST APIs'],
    impact: 'Streamlined issue tracking and resolution workflows.',
    links: {
      demo: '#',
      github: 'https://github.com/nqobilemagwaza6/Ticket-Management-System.git',
    },
  },
  {
    id: 'p3',
    title: 'Therapy Booking System',
    category: 'End-to-End Service Booking Platform',
    mission: 'Enable clients to book therapy sessions, make payments, and allow therapists and admins to manage schedules and revenue.',
    tech: ['Full-Stack', 'React', 'Payments', 'Scheduling'],
    impact: 'Delivered a complete booking, payment, and management solution.',
    links: {
      demo: '#',
      github: 'https://github.com/Crown-Coders/smart-booking-system.git',
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
  body: "I am a software developer with a strong interest in AI and full-stack development, focused on building practical solutions that solve real-world problems. I enjoy turning complex ideas into simple, usable software and believe in developing technology that is ethical, accessible, and impactful, especially within the South African context. I have hands-on experience developing AI-powered tools, full-stack applications, and production-ready systems through the Capaciti AI Bootcamp and Capaciti Software Engineering Programme. I am continuously learning, improving my craft, and applying my skills to create reliable, user-focused digital solutions.",
  education: 'National Diploma in Software Development | IIE Rosebank College | 2023 – 2025',
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
