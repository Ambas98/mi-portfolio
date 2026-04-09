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
      id: "sublime",
      title: "Café Sublime",
      description:
        "Sitio web para Café Sublime, café de especialidad en San Juan, Argentina. Diseño a medida con identidad de marca propia: colores, tipografía, logo y fotos del local. Menú completo, sucursales con Google Maps, beneficios y sección de eventos.",
      tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Vercel"],
      githubUrl: "https://github.com/Ambas98/Sublime",
      liveUrl: undefined,
      status: "live",
      highlights: [
        "Diseño 100% a medida basado en manual de marca del cliente",
        "Catálogo de 12 categorías de menú",
        "Dos sucursales con integración a Google Maps",
        "Animaciones con Framer Motion",
      ],
    },
    {
      id: "shefri",
      title: "Shefri Pizzería",
      description:
        "Sitio web para Shefri, pizzería napolitana artesanal en San Juan. Menú visual con fotos de cada pizza, sistema de pedidos por WhatsApp, galería y sección de eventos. Identidad gráfica completa integrada al diseño.",
      tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Vercel"],
      githubUrl: "https://github.com/Ambas98/Shefri-web",
      liveUrl: undefined,
      status: "live",
      highlights: [
        "Menú visual con imágenes por producto",
        "Pedidos directos por WhatsApp",
        "Galería de fotos del local",
        "Diseño mobile-first con animaciones",
      ],
    },
    {
      id: "cooperativa-el-abanico",
      title: "Cooperativa El Abanico",
      description:
        "Sitio web institucional para la Cooperativa El Abanico, San Juan. Presenta los servicios, historia y valores de la organización con un diseño limpio y accesible, optimizado para SEO.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      githubUrl: "https://github.com/Ambas98/Coperativa-El-Abanico",
      liveUrl: undefined,
      status: "live",
      highlights: [
        "Diseño institucional accesible",
        "Galería de fotos optimizada",
        "SEO y estructura semántica",
        "100% responsive",
      ],
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
