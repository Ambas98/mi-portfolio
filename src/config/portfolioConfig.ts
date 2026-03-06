import { PortfolioConfig } from "@/types/portfolio";

export const portfolioConfig: PortfolioConfig = {
  name: "Nicolás Ambas",
  role: "Desarrollador Web & Agencia Digital",
  tagline: "Sitios web y aplicaciones a medida para negocios que quieren crecer online.",
  bio: "Soy desarrollador full stack con especialización en back-end, basado en San Juan, Argentina. Diseño y construyo sitios web modernos, rápidos y escalables para negocios locales, restaurantes, profesionales y startups. Cada proyecto arranca desde cero y queda listo para usar — sin plantillas genéricas, sin vueltas.",
  location: "San Juan, Argentina",
  email: "nicolasambas@gmail.com",
  availability: "Disponible para nuevos proyectos",

  skills: [
    // Back-end
    { name: "Node.js", category: "backend" },
    { name: "NestJS", category: "backend" },
    { name: "TypeScript", category: "backend" },
    { name: "PostgreSQL", category: "backend" },
    { name: "TypeORM", category: "backend" },
    { name: "REST API", category: "backend" },
    // Front-end
    { name: "Next.js", category: "frontend" },
    { name: "React", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },
    { name: "HTML5 / CSS3", category: "frontend" },
    // Tools
    { name: "Git / GitHub", category: "tools" },
    { name: "Vercel", category: "tools" },
    { name: "Auth0", category: "tools" },
    { name: "Swagger", category: "tools" },
    { name: "JWT", category: "tools" },
    // Learning
    { name: "System Design", category: "learning" },
    { name: "API Architecture", category: "learning" },
  ],

  projects: [
    {
      id: "plantilla-negocio",
      title: "Plantilla-Negocio",
      description:
        "A pre-built, cloneable Next.js + Tailwind website template designed for local restaurants and small businesses in Argentina. Built as the foundation of a web agency model — each client gets a customized clone deployed to Vercel in days, not weeks.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      githubUrl: "https://github.com/Ambas98/Plantilla-Negocio",
      liveUrl: undefined,
      status: "live",
      highlights: [
        "siteConfig.ts as single source of truth for client data",
        "Mobile-first, SEO optimized design",
        "Google Maps integration & contact form",
        "Ready to clone and deploy for each client",
      ],
    },
    {
      id: "arcana",
      title: "Arcana E-Commerce",
      description:
        "Full-featured e-commerce platform for an esoteric products store, built in a team of 4 under SCRUM methodology. Led the back-end: Auth0 authentication, persistent cart, payments module, and full Swagger documentation.",
      tech: ["NestJS", "PostgreSQL", "TypeORM", "Auth0", "Swagger"],
      githubUrl: undefined,
      liveUrl: undefined,
      status: "live",
      highlights: [
        "Back-end tech lead role",
        "Auth0 authentication flow",
        "Persistent cart & payments module",
        "Full Swagger API documentation",
      ],
    },
    {
      id: "coming-soon",
      title: "Próximamente",
      description:
        "Nuevo proyecto en desarrollo. Arquitectura de API con NestJS, autenticación avanzada y deploy en producción.",
      tech: ["NestJS", "TypeScript", "PostgreSQL"],
      status: "coming-soon",
    },
  ],

  social: [
    {
      label: "GitHub",
      url: "https://github.com/Ambas98",
      icon: "github",
    },
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/nicolasambas",
      icon: "linkedin",
    },
    {
      label: "Email",
      url: "mailto:nicolasambas@gmail.com",
      icon: "email",
    },
  ],

  seo: {
    title: "Nicolás Ambas — Full Stack Developer",
    description:
      "Full Stack Developer specializing in back-end architecture with Node.js, NestJS, and TypeScript. Based in San Juan, Argentina.",
    url: "https://nicolasambas.vercel.app",
  },
};
