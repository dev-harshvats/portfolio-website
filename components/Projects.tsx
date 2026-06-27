"use client";

import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface Project {
  title: string;
  description: string[];
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  timeline: string;
}

export default function Projects() {
  const projectsList: Project[] = [
    {
      title: "Custom RISC Assembler",
      timeline: "Mar 2026 – Present",
      tech: ["Java", "Systems Programming", "Bit Manipulation"],
      githubUrl: "https://github.com/dev-harshvats/ISA_Assembler_RISC",
      description: [
        "Engineered a two-pass assembler in Java translating custom assembly into 32-bit binary machine code, supporting a full RISC ISA with R, I, and branch instruction formats.",
        "Built a symbol table and branch-offset resolution engine for forward/backward jumps; validated binary object files against manual encoding, ensuring 100% translation accuracy."
      ],
    },
    {
      title: "Code Police",
      timeline: "Dec 2025 – Feb 2026",
      tech: ["Next.js", "Node.js", "PostgreSQL", "JWT"],
      githubUrl: "https://github.com/dev-harshvats/Code_Police",
      liveUrl: "https://github.com/dev-harshvats/Code_Police",
      description: [
        "Architected a full-stack competitive programming tracker that aggregates live stats from LeetCode and Codeforces, consolidating multi-platform data into a unified real-time dashboard.",
        "Automated sync via cron jobs and optimized PostgreSQL queries, cutting manual refresh to zero and reducing average response latency by 40% under concurrent load.",
        "Shipped a JWT-based auth system with role-based access control, ensuring zero unauthorized access incidents in production."
      ],
    },
    {
      title: "Real-Time Chat Application",
      timeline: "Jul 2025 – Aug 2025",
      tech: ["React", "Node.js", "WebSockets", "Express.js"],
      githubUrl: "https://github.com/dev-harshvats/Real-Time-Chat",
      liveUrl: "https://github.com/dev-harshvats/Real-Time-Chat",
      description: [
        "Built a multi-room chat app with sub-100ms delivery via persistent WebSocket connections, reducing server load by 60% compared to REST-based polling alternatives.",
        "Deployed on Render with strict CORS policies and environment-based secrets management, achieving zero downtime in production."
      ],
    },
    {
      title: "ElevateCV — AI Resume Reviewer",
      timeline: "Jan 2025 – May 2025",
      tech: ["React.js", "Node.js", "OpenAI API", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/dev-harshvats/Resume-Reviewer-App",
      liveUrl: "https://github.com/dev-harshvats/Resume-Reviewer-App",
      description: [
        "Developed an AI-powered resume review tool using OpenAI's API delivering instant feedback on content, formatting, and ATS keyword alignment via PDF/DOCX parsing pipelines.",
        "Designed a section-level recommendation engine that improved average resume quality scores by 30% in internal testing."
      ],
    },
  ];

  return (
    <section id="projects" className="relative z-10">
      <div>
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2">
            Featured Projects
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projectsList.map((project, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between p-6 bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 rounded-2xl transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700/80 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/60 hover:shadow-indigo-glow hover:scale-[1.02] shadow-sm"
            >
              <div>
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <span className="text-xs text-zinc-400 dark:text-zinc-500">{project.timeline}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-zinc-100 dark:bg-zinc-800/40 text-zinc-500 dark:text-zinc-400 hover:text-[#24292e] dark:hover:text-white rounded-full border border-zinc-200 dark:border-zinc-700/50 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-200"
                      aria-label={`View code for ${project.title}`}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    {project.liveUrl && project.liveUrl !== project.githubUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-zinc-100 dark:bg-zinc-800/40 text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-full border border-zinc-200 dark:border-zinc-700/50 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-200"
                        aria-label={`View live demo for ${project.title}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/30 text-zinc-600 dark:text-zinc-300 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Description Bullets */}
                <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed list-none pl-0">
                  {project.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="relative pl-5">
                      <span className="absolute left-0 top-[6px] w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
