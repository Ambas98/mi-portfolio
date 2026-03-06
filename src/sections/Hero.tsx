"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { portfolioConfig } from "@/config/portfolioConfig";

interface Beam {
  x: number;
  y: number;
  width: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
  pulse: number;
  pulseSpeed: number;
  layer: number;
}

function createBeam(width: number, height: number, layer: number): Beam {
  const angle = -35 + Math.random() * 10;
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    width: 10 + layer * 5,
    length: height * 2.5,
    angle,
    speed: 0.2 + layer * 0.2 + Math.random() * 0.2,
    opacity: 0.08 + layer * 0.05 + Math.random() * 0.1,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.01 + Math.random() * 0.015,
    layer,
  };
}

const rotatingWords = ["modernos", "rápidos", "escalables", "confiables", "a medida"];

const LAYERS = 3;
const isMobile = () => typeof window !== "undefined" && window.innerWidth < 768;
const BEAMS_PER_LAYER = 8;

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const noiseRef = useRef<HTMLCanvasElement>(null);
  const beamsRef = useRef<Beam[]>([]);
  const animationFrameRef = useRef<number>(0);
  const [titleNumber, setTitleNumber] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const noiseCanvas = noiseRef.current;
    if (!canvas || !noiseCanvas) return;

    const ctx = canvas.getContext("2d");
    const nCtx = noiseCanvas.getContext("2d");
    if (!ctx || !nCtx) return;

    let w = 0;
    let h = 0;
    let frameCount = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // cap DPR at 2
      w = window.innerWidth;
      h = window.innerHeight;

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      noiseCanvas.width = w * dpr;
      noiseCanvas.height = h * dpr;
      noiseCanvas.style.width = `${w}px`;
      noiseCanvas.style.height = `${h}px`;
      nCtx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Fewer beams on mobile to save battery
      const beamsCount = isMobile() ? 4 : BEAMS_PER_LAYER;
      beamsRef.current = [];
      for (let layer = 1; layer <= LAYERS; layer++) {
        for (let i = 0; i < beamsCount; i++) {
          beamsRef.current.push(createBeam(w, h, layer));
        }
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const drawBeam = (beam: Beam) => {
      ctx.save();
      ctx.translate(beam.x, beam.y);
      ctx.rotate((beam.angle * Math.PI) / 180);
      const pulsingOpacity = Math.min(1, beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.4));
      const grad = ctx.createLinearGradient(0, 0, 0, beam.length);
      grad.addColorStop(0, `rgba(0,255,255,0)`);
      grad.addColorStop(0.2, `rgba(0,255,255,${pulsingOpacity * 0.5})`);
      grad.addColorStop(0.5, `rgba(0,255,255,${pulsingOpacity})`);
      grad.addColorStop(0.8, `rgba(0,255,255,${pulsingOpacity * 0.5})`);
      grad.addColorStop(1, `rgba(0,255,255,0)`);
      ctx.fillStyle = grad;
      ctx.filter = `blur(${2 + beam.layer * 2}px)`;
      ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
      ctx.restore();
    };

    const animate = () => {
      // Fill with CSS-pixel dimensions (context is already DPR-scaled)
      const bg = ctx.createLinearGradient(0, 0, 0, h);
      bg.addColorStop(0, "#050505");
      bg.addColorStop(1, "#0a0a0a");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      beamsRef.current.forEach((beam) => {
        beam.y -= beam.speed * (beam.layer / LAYERS + 0.5);
        beam.pulse += beam.pulseSpeed;
        if (beam.y + beam.length < -50) {
          beam.y = h + 50;
          beam.x = Math.random() * w;
        }
        drawBeam(beam);
      });

      // Noise overlay — only every 3rd frame to save CPU on mobile
      frameCount++;
      if (frameCount % 3 === 0) {
        const imgData = nCtx.createImageData(noiseCanvas.width, noiseCanvas.height);
        for (let i = 0; i < imgData.data.length; i += 4) {
          const v = Math.random() * 255;
          imgData.data[i] = v;
          imgData.data[i + 1] = v;
          imgData.data[i + 2] = v;
          imgData.data[i + 3] = 12;
        }
        nCtx.putImageData(imgData, 0, 0);
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleNumber((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      {/* Canvas layers */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <canvas ref={noiseRef} className="absolute inset-0 z-10 pointer-events-none" />

      {/* Gradient fade to page below */}
      <div className="absolute bottom-0 left-0 right-0 h-48 z-20 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #030712)" }} />

      {/* Content */}
      <div className="relative z-30 flex h-full w-full items-center justify-center px-6 text-center">
        <div className="flex flex-col items-center gap-10 max-w-3xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 text-cyan-400 text-sm font-mono border border-cyan-400/20 bg-cyan-400/5 px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            {portfolioConfig.availability}
          </div>

          {/* Heading with rotating word */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl tracking-tight font-bold leading-tight">
            <span className="text-white">Sitios web</span>
            <span className="relative flex w-full justify-center overflow-hidden pb-6 pt-2">
              &nbsp;
              {rotatingWords.map((word, index) => (
                <motion.span
                  key={index}
                  className="absolute font-bold text-cyan-400"
                  initial={{ opacity: 0, y: -100 }}
                  transition={{ type: "spring", stiffness: 50 }}
                  animate={
                    titleNumber === index
                      ? { y: 0, opacity: 1 }
                      : { y: titleNumber > index ? -150 : 150, opacity: 0 }
                  }
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl leading-relaxed text-gray-400 max-w-xl">
            {portfolioConfig.tagline}
          </p>

          {/* CTAs */}
          <div className="flex flex-row gap-3 flex-wrap justify-center">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
            >
              Ver proyectos <MoveRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/10 hover:border-cyan-400/40 text-gray-300 hover:text-cyan-400 font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
            >
              Hablemos de tu proyecto
            </a>
          </div>

        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 text-xs font-mono z-30">
        <span>deslizá</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
      </div>
    </section>
  );
}
