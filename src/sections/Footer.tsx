import { portfolioConfig } from "@/config/portfolioConfig";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-sm font-mono">
        <span>
          © {year}{" "}
          <span className="text-gray-400">{portfolioConfig.name}</span>
        </span>
        <span>
          Built with{" "}
          <span className="text-cyan-400">Next.js</span>
          {" "}&#43;{" "}
          <span className="text-cyan-400">Tailwind CSS</span>
        </span>
      </div>
    </footer>
  );
}
