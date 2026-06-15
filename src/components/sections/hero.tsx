"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, FileText, Mail, Sparkles } from "lucide-react";
import { heroRoles, socialLinks, stats } from "@/data/portfolio";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { StatCounter } from "@/components/ui/stat-counter";

export function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIdx((prev) => (prev + 1) % heroRoles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const headline = "Empowering Decision Systems With Rigorous Machine Learning";
  const words = headline.split(" ");

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16 px-6 sm:px-12 md:px-20 lg:px-32"
    >
      <div className="mx-auto w-full max-w-6xl relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
          
          {/* Left Side: Content */}
          <div className="space-y-6 md:space-y-8">
            
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-cream/40 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-charcoal/90 backdrop-blur-md shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent border border-cream"></span>
              </span>
              2025 Graduate · Open for Data & AI Roles
            </motion.div>

            {/* Cinematic Title: Word by Word Reveal */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight text-charcoal">
              <span className="text-luxury-serif italic font-normal text-brown-muted block mb-1">
                Konnichiwa, I am Varun Kumar H C
              </span>
              <span className="flex flex-wrap gap-x-2 sm:gap-x-3">
                {words.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 + i * 0.08,
                      ease: "easeOut",
                    }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Rotating Role */}
            <div className="flex items-center gap-2.5 min-h-[32px]">
              <div className="h-5 w-0.5 bg-gold" />
              <div className="overflow-hidden py-1">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={roleIdx}
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -15, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="text-luxury-serif italic text-base sm:text-lg font-semibold text-accent"
                  >
                    {heroRoles[roleIdx]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            {/* Summary */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="max-w-xl text-sm sm:text-base leading-relaxed text-brown-muted"
            >
              I bridge raw, noisy datasets with intelligent, deployment-ready prediction systems. 
              Grounded in machine learning, exploratory analytics, and vector databases, I design workflows that deliver metrics and clarity.
            </motion.p>

            {/* Primary CTA Buttons with Magnetic Hover */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <MagneticButton
                onClick={() => scrollTo("projects")}
                className="bg-charcoal text-cream border-charcoal hover:bg-charcoal/90 hover:text-white"
              >
                View Projects <ArrowDown size={14} className="stroke-[2.5]" />
              </MagneticButton>

              <MagneticButton
                href={socialLinks.resume}
                target="_blank"
                rel="noreferrer"
              >
                Download Resume <FileText size={14} className="stroke-[2.5]" />
              </MagneticButton>

              <MagneticButton
                onClick={() => scrollTo("contact")}
                className="border-dashed"
              >
                Contact Me <Mail size={14} className="stroke-[2.5]" />
              </MagneticButton>
            </motion.div>

            {/* Stats Counter Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="grid grid-cols-2 gap-4 sm:grid-cols-4 pt-6 md:pt-10 border-t border-gold/15"
            >
              {stats.map((s, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-bold text-charcoal tracking-tight flex items-center">
                    {idx === 3 ? null : <span className="text-gold mr-0.5 text-sm sm:text-base">#</span>}
                    <StatCounter value={s.value} />
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-brown-muted">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Right Side: Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, rotate: 2, scale: 0.95 }}
            animate={{ opacity: 1, rotate: -1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
            className="relative justify-self-center lg:justify-self-end w-full max-w-[340px]"
          >
            {/* Ambient luxury backdrop glow */}
            <div className="absolute inset-6 -z-10 rounded-[30px] bg-gold/15 blur-2xl transform translate-x-3 translate-y-4" />

            {/* Elegant glass container */}
            <div className="glass-card-heavy p-4.5 rounded-[24px]">
              <div className="relative overflow-hidden rounded-[16px] border border-gold/30 aspect-square bg-[#f5efe5]">
                <Image
                  src="/images/hero_anime.png"
                  alt="Varun Kumar Workspace Illustration"
                  fill
                  sizes="(max-width: 768px) 100vw, 340px"
                  priority
                  className="object-cover hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
              <div className="pt-4 pb-1 text-center">
                <p className="text-luxury-serif italic text-sm font-semibold text-charcoal/90 leading-tight">
                  "Exploring new AI dimensions"
                </p>
                <div className="mt-2.5 mx-auto w-8 h-0.5 bg-gold/40 rounded-full" />
              </div>
            </div>

            {/* Decorative Badges */}
            <div className="absolute -top-3.5 -left-4 transform -rotate-6 rounded-lg border border-gold/30 bg-cream/80 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-charcoal/90 shadow-sm flex items-center gap-1">
              <Sparkles size={10} className="text-gold" /> Data Science
            </div>
            <div className="absolute -bottom-2 -right-2 transform rotate-3 rounded-lg border border-gold/30 bg-cream/80 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-charcoal/90 shadow-sm">
              AIML B.E.
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
