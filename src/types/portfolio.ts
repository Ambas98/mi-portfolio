export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: "live" | "wip" | "coming-soon";
  highlights?: string[];
}

export interface Skill {
  name: string;
  category: "backend" | "frontend" | "tools" | "learning";
}

export interface SocialLink {
  label: string;
  url: string;
  icon: "github" | "linkedin" | "email";
}

export interface PortfolioConfig {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  availability: string;
  skills: Skill[];
  projects: Project[];
  social: SocialLink[];
  seo: {
    title: string;
    description: string;
    url: string;
  };
}
