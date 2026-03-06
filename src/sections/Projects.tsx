"use client";

import { motion } from "framer-motion";
import { portfolioConfig } from "@/config/portfolioConfig";
import { GitHubIcon, ExternalLinkIcon } from "@/components/Icons";
import { Project } from "@/types/portfolio";

const statusConfig = {
  live: { label: "Activo", className: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20" },
  wip: { label: "En progreso", className: "text-amber-400 bg-amber-400/10 border-amber-400/20" },
  "coming-soon": { label: "Próximamente", className: "text-gray-400 bg-gray-400/10 border-gray-400/20" },
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isComingSoon = project.status === "coming-soon";
  const status = statusConfig[project.status];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex flex-col bg-gray-900/50 border rounded-xl p-6 transition-colors duration-300 ${
        isComingSoon
          ? "border-white/5 opacity-60"
          : "border-white/5 hover:border-cyan-400/20"
      }`}
    >
      {/* Status badge */}
      <div className="flex items-start justify-between mb-4">
        <span
          className={`text-xs font-mono px-2.5 py-1 rounded-full border ${status.className}`}
        >
          {status.label}
        </span>
        {!isComingSoon && (
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Repositorio en GitHub"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <GitHubIcon size={18} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver en vivo"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <ExternalLinkIcon size={16} />
              </a>
            )}
          </div>
        )}
      </div>

      <h3 className="text-white font-bold text-xl mb-2">{project.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

      {/* Highlights */}
      {project.highlights && !isComingSoon && (
        <ul className="mb-4 space-y-1">
          {project.highlights.map((h) => (
            <li key={h} className="text-xs text-gray-500 flex items-start gap-2">
              <span className="text-cyan-400 mt-0.5">›</span>
              {h}
            </li>
          ))}
        </ul>
      )}

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs font-mono text-gray-400 bg-white/5 border border-white/5 px-2 py-0.5 rounded"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mt-2">
            Proyectos
          </h2>
          <p className="text-gray-400 mt-3 max-w-lg mx-auto">
            Lo que construí — y lo que viene.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioConfig.projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
