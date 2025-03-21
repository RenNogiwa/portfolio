export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  details: {
    overview: string;
    features: string[];
    impact: string;
    link?: string;
  };
} 