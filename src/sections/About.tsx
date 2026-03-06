"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { portfolioConfig } from "@/config/portfolioConfig";

const highlights = [
  {
    label: "Listo en días, no meses",
    description: "Cada proyecto arranca con una base sólida y se personaliza para tu negocio. Sin demoras innecesarias.",
    icon: "⚡",
  },
  {
    label: "Diseño + Tecnología",
    description: "Full stack: me ocupo del diseño, el código y el deploy. Vos te ocupás de tu negocio.",
    icon: "🎯",
  },
  {
    label: "Tuyo para siempre",
    description: "El sitio te pertenece. Podés actualizarlo cuando quieras, sin depender de nadie.",
    icon: "🔑",
  },
];

function HighlightCard({
  label,
  description,
  icon,
  index,
}: (typeof highlights)[0] & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-900/50 border border-white/5 rounded-xl p-6 flex flex-col gap-3 hover:border-cyan-400/20 transition-colors duration-300"
    >
      <span className="text-2xl">{icon}</span>
      <h3 className="text-white font-semibold">{label}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mt-2">Sobre mí</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Avatar placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow behind the photo */}
              <div className="absolute inset-0 rounded-2xl bg-cyan-500/5 blur-2xl scale-110 pointer-events-none" />
              {/* Photo container */}
              <div className="relative w-96 h-[460px] overflow-hidden">
                <Image
                  src="/profile.png"
                  alt="Nicolás Ambas"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "5% center" }}
                  priority
                />
              </div>
              <div className="absolute -bottom-3 left-0 right-0 bg-gray-900 border border-white/10 rounded-lg px-3 py-1.5 text-center">
                <span className="text-xs text-gray-400 font-mono">
                  🇦🇷 San Juan, Argentina
                </span>
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              {portfolioConfig.bio}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Next.js + Tailwind", "Deploy en Vercel", "SEO incluido", "Soporte post-lanzamiento"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Highlight cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {highlights.map((card, i) => (
            <HighlightCard key={card.label} {...card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
