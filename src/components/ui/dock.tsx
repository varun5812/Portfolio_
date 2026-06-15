"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, User, Code2, FolderGit2, Briefcase, Award, Mail } from "lucide-react";
import { sectionMeta } from "@/data/portfolio";

const iconMap: Record<string, React.ComponentType<any>> = {
  hero: Home,
  about: User,
  skills: Code2,
  projects: FolderGit2,
  journey: Briefcase,
  certifications: Award,
  contact: Mail
};

export function Dock() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll position with an offset
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const section of sectionMeta) {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run initially to set the correct state
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <nav className="glass-dock flex items-center gap-1 sm:gap-1.5 rounded-full px-2.5 py-1.5 sm:px-3 sm:py-2">
        {sectionMeta.map((item) => {
          const IconComponent = iconMap[item.id] || Home;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="group relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full text-charcoal/65 transition-all duration-300 hover:text-charcoal hover:scale-105 active:scale-95"
              title={item.label}
            >
              {/* Magnetic active indicator */}
              {isActive && (
                <motion.div
                  layoutId="active-dock-pill"
                  className="absolute inset-0 rounded-full bg-gold/15 border border-gold/40"
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                />
              )}
              
              <IconComponent className="relative z-10 h-4.5 w-4.5 sm:h-5 sm:w-5 stroke-[2]" />
              
              {/* Tooltip */}
              <span className="pointer-events-none absolute bottom-14 left-1/2 -translate-x-1/2 rounded-md bg-charcoal px-2.5 py-1 text-[10px] font-bold tracking-wider text-cream opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-[-4px] group-hover:opacity-100 uppercase">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
