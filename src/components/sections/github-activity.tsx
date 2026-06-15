import React from "react";
import { Folder, Star, Award, Code } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight";
import { GithubIcon } from "@/components/ui/icons";

interface GitHubData {
  publicRepos: number;
  followers: number;
  starsCount: number;
  topLanguages: { name: string; percentage: number }[];
  error?: boolean;
}

// Fallback data if API is rate-limited or fails
const fallbackData: GitHubData = {
  publicRepos: 18,
  followers: 6,
  starsCount: 8,
  topLanguages: [
    { name: "Python", percentage: 55 },
    { name: "Jupyter Notebook", percentage: 25 },
    { name: "HTML/CSS", percentage: 12 },
    { name: "SQL", percentage: 8 }
  ]
};

async function getGitHubData(): Promise<GitHubData> {
  const username = "varun5812";
  
  try {
    // Fetch profile info with 1-hour cache
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      next: { revalidate: 3600 },
      headers: {
        "User-Agent": "varun5812-portfolio-rebuild"
      }
    });

    if (!userRes.ok) {
      throw new Error("Failed to fetch profile");
    }

    const userData = await userRes.json();

    // Fetch repository details to calculate top languages
    const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, {
      next: { revalidate: 3600 },
      headers: {
        "User-Agent": "varun5812-portfolio-rebuild"
      }
    });

    if (!reposRes.ok) {
      throw new Error("Failed to fetch repos");
    }

    const reposData = await reposRes.json();

    // Calculate stars and languages
    let starsCount = 0;
    const languageCounts: Record<string, number> = {};
    let totalLanguageCount = 0;

    reposData.forEach((repo: any) => {
      starsCount += repo.stargazers_count;
      if (repo.language) {
        languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
        totalLanguageCount++;
      }
    });

    // Format top languages
    const topLanguages = Object.entries(languageCounts)
      .map(([name, count]) => ({
        name,
        percentage: Math.round((count / totalLanguageCount) * 100)
      }))
      .sort((a, b) => b.percentage - a.percentage)
      .slice(0, 4);

    return {
      publicRepos: userData.public_repos || fallbackData.publicRepos,
      followers: userData.followers || fallbackData.followers,
      starsCount: starsCount || fallbackData.starsCount,
      topLanguages: topLanguages.length > 0 ? topLanguages : fallbackData.topLanguages
    };
  } catch (error) {
    console.warn("GitHub API fetch failed. Using fallback data.", error);
    return { ...fallbackData, error: true };
  }
}

export async function GitHubActivity() {
  const data = await getGitHubData();

  return (
    <section
      id="github"
      className="relative py-24 px-6 sm:px-12 md:px-20 lg:px-32 bg-cream/35 border-t border-gold/15"
    >
      <div className="mx-auto max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
            06. Code Matrix
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-charcoal">
            GitHub Snapshot & <span className="text-luxury-serif italic font-normal text-brown-muted">Metrics</span>
          </h2>
        </div>

        {/* Bento Board layout for statistics */}
        <div className="grid gap-6 md:grid-cols-3">
          
          {/* Card 1: Repository Count */}
          <SpotlightCard className="glass-card p-6 md:p-8 rounded-[24px] flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
            <div className="space-y-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 border border-gold/20 text-gold">
                <Folder size={18} className="stroke-[2.5]" />
              </div>
              <h3 className="text-sm font-semibold text-brown-muted uppercase tracking-wider">
                Public Repositories
              </h3>
              <p className="text-4xl sm:text-5xl font-bold text-charcoal tracking-tight font-sans">
                {data.publicRepos}
              </p>
            </div>
            <div className="pt-4 border-t border-dashed border-gold/15 flex items-center justify-between text-xs text-brown-muted">
              <span>Live repositories</span>
              <a
                href="https://github.com/varun5812"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold transition-colors duration-200"
              >
                View all &rarr;
              </a>
            </div>
          </SpotlightCard>

          {/* Card 2: Star Counts / Engagement */}
          <SpotlightCard className="glass-card p-6 md:p-8 rounded-[24px] flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
            <div className="space-y-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 border border-gold/20 text-gold">
                <Star size={18} className="stroke-[2.5]" />
              </div>
              <h3 className="text-sm font-semibold text-brown-muted uppercase tracking-wider">
                Stars Earned
              </h3>
              <p className="text-4xl sm:text-5xl font-bold text-charcoal tracking-tight font-sans">
                {data.starsCount}
              </p>
            </div>
            <div className="pt-4 border-t border-dashed border-gold/15 flex items-center justify-between text-xs text-brown-muted">
              <span>Repository stars</span>
              <span className="font-semibold text-gold">Active</span>
            </div>
          </SpotlightCard>

          {/* Card 3: Top Languages distribution */}
          <SpotlightCard className="glass-card p-6 md:p-8 rounded-[24px] flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 md:row-span-1">
            <div className="space-y-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 border border-gold/20 text-gold">
                <Code size={18} className="stroke-[2.5]" />
              </div>
              <h3 className="text-sm font-semibold text-brown-muted uppercase tracking-wider">
                Top Languages
              </h3>
              
              <div className="space-y-2.5 pt-1">
                {data.topLanguages.map((lang) => (
                  <div key={lang.name} className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold text-charcoal/90">
                      <span>{lang.name}</span>
                      <span>{lang.percentage}%</span>
                    </div>
                    <div className="h-1 rounded-full bg-sand/30 overflow-hidden">
                      <div
                        className="h-full bg-gold rounded-full"
                        style={{ width: `${lang.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-4 border-t border-dashed border-gold/15 text-[10px] text-brown-muted text-center italic">
              *Computed from public Git repositories
            </div>
          </SpotlightCard>

        </div>

        {/* Dynamic CTA box */}
        <div className="mt-8 rounded-[24px] glass-card p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-gold/25 hover:border-gold transition-all duration-300">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-charcoal text-cream rounded-full">
              <GithubIcon size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-charcoal">Interested in checking the code quality?</h4>
              <p className="text-xs text-brown-muted font-normal mt-0.5">Explore full pipeline repositories, custom notebooks, and streamlit deployments.</p>
            </div>
          </div>
          <a
            href="https://github.com/varun5812"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-1.5 rounded-full bg-charcoal px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-cream shadow-sm transition-all duration-300 hover:bg-charcoal/80 active:scale-95"
          >
            Visit GitHub Profile &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
