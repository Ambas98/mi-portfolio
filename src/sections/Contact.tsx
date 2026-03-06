"use client";

import { motion } from "framer-motion";
import { portfolioConfig } from "@/config/portfolioConfig";
import { GitHubIcon, LinkedInIcon, EmailIcon } from "@/components/Icons";

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: EmailIcon,
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mt-2 mb-4">
            ¿Tenés un proyecto?
          </h2>
          <p className="text-gray-400 text-lg mb-3 leading-relaxed">
            ¿Querés llevar tu negocio a internet o mejorar lo que ya tenés?
          </p>
          <p className="text-gray-500 text-sm mb-12">
            Contame qué necesitás y te respondo rápido. Sin vueltas, sin presupuestos
            genéricos — hablamos de tu caso puntual.
          </p>
        </motion.div>

        {/* Email CTA */}
        <motion.a
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          href={`mailto:${portfolioConfig.email}`}
          className="inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-bold text-lg px-8 py-4 rounded-xl transition-colors duration-200 mb-12"
        >
          <EmailIcon size={20} />
          {portfolioConfig.email}
        </motion.a>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-4"
        >
          {portfolioConfig.social.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.icon}
                href={link.url}
                target={link.icon !== "email" ? "_blank" : undefined}
                rel={link.icon !== "email" ? "noopener noreferrer" : undefined}
                aria-label={link.label}
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 border border-white/10 hover:border-cyan-400/30 px-5 py-3 rounded-lg transition-colors duration-200 font-mono text-sm"
              >
                <Icon size={18} />
                {link.label}
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
