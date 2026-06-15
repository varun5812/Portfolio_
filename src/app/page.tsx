import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Dock } from "@/components/ui/dock";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Journey } from "@/components/sections/journey";
import { Certifications } from "@/components/sections/certifications";
import { GitHubActivity } from "@/components/sections/github-activity";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="relative min-h-screen selection:bg-gold/30 selection:text-charcoal overflow-x-hidden">
      {/* Drifting Aurora Ambient Background */}
      <AuroraBackground />

      {/* Floating Navigation Dock */}
      <Dock />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Certifications />
        {/* Async Server Component for live statistics cached for 1hr */}
        <GitHubActivity />
        <Contact />
      </main>

      {/* Premium Luxury Footer */}
      <footer className="relative z-10 border-t border-gold/15 bg-cream/40 backdrop-blur-md py-12 text-center">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-luxury-serif text-base font-bold text-charcoal tracking-wide">
            varun<span className="text-gold font-sans font-black">.</span>
          </p>
          <p className="text-[10px] sm:text-xs font-semibold text-brown-muted uppercase tracking-widest">
            © 2026 Varun Kumar H C · Rebuilt with Passion and Precision ✨
          </p>
        </div>
      </footer>
    </div>
  );
}
