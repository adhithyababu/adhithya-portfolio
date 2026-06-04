export interface Social {
  github: string;
  linkedin: string;
  email: string;
  phone: string;
  whatsapp: string;
}

export interface Profile {
  name: string;
  shortName: string;
  tagline: string;
  role: string;
  specialization: string;
  location: string;
  bio: string;
  social: Social;
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  role: string;
  year: string;
  link: string;
  github?: string;
  highlight: boolean;
}

export interface PortfolioData {
  profile: Profile;
  skills: SkillCategory[];
  projects: Project[];
}
