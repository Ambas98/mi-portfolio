"use client";

import { motion } from "framer-motion";
import { portfolioConfig } from "@/config/portfolioConfig";
import { Skill } from "@/types/portfolio";

const categoryLabels: Record<Skill["category"], string> = {
  backend: "Back-End",
  frontend: "Front-End",
  tools: "Herramientas & DevOps",
  learning: "Aprendiendo",
};

const categoryColors: Record<Skill["category"], string> = {
  backend: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  frontend: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  tools: "text-purple-400 bg-purple-400/10 border-purple-400/20",
  learning: "text-amber-400 bg-amber-400/10 border-amber-400/20",
};

const categories: Skill["category"][] = ["backend", "frontend", "tools", "learning"];

export default function Stack() {
  const grouped = categories.reduce(
    (acc, cat) => {
      acc[cat] = portfolioConfig.skills.filter((s) => s.category === cat);
      return acc;
    },
    {} as Record<Skill["category"], Skill[]>
  );

  return (
    <section id="stack" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mt-2">
            Tecnologías
          </h2>
          <p className="text-gray-400 mt-3 max-w-lg mx-auto">
            Herramientas con las que construyo día a día.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-gray-900/50 border border-white/5 rounded-xl p-6"
            >
              <h3 className="text-sm font-semibold text-gray-300 mb-4 font-mono">
                {categoryLabels[cat]}
              </h3>
              <div className="flex flex-col gap-2">
                {grouped[cat].map((skill, skillIndex) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: catIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className={`inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-mono border ${categoryColors[cat]}`}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
