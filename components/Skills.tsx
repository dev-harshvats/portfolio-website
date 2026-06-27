"use client";

import { 
  Code2, 
  Layers, 
  Terminal, 
  Cpu, 
  Globe, 
  RefreshCw, 
  Key, 
  Bot, 
  Settings,
  Database
} from "lucide-react";

interface SkillItem {
  name: string;
  iconUrl?: string;
  lucideIcon?: any;
}

interface SkillGroup {
  category: string;
  skills: SkillItem[];
}

export default function Skills() {
  const skillGroups: SkillGroup[] = [
    {
      category: "Languages",
      skills: [
        { name: "C++", iconUrl: "https://cdn.simpleicons.org/cplusplus/00599C" },
        { name: "C", iconUrl: "https://cdn.simpleicons.org/c/A8B9CC" },
        { name: "Java", iconUrl: "https://skillicons.dev/icons?i=java" },
        { name: "Python", iconUrl: "https://cdn.simpleicons.org/python/3776AB" },
        { name: "JavaScript", iconUrl: "https://cdn.simpleicons.org/javascript/F7DF1E" },
        { name: "TypeScript", iconUrl: "https://cdn.simpleicons.org/typescript/3178C6" },
        { name: "SQL", iconUrl: "https://cdn.simpleicons.org/sqlite/003B57" }, // Using SQLite slug for SQL
      ],
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        { name: "React.js", iconUrl: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "Next.js", iconUrl: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
        { name: "Node.js", iconUrl: "https://cdn.simpleicons.org/nodedotjs/339933" },
        { name: "Express.js", iconUrl: "https://cdn.simpleicons.org/express/FFFFFF" },
        { name: "Vite", iconUrl: "https://cdn.simpleicons.org/vite/646CFF" },
        { name: "Tailwind CSS", iconUrl: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      ],
    },
    {
      category: "Databases & Tools",
      skills: [
        { name: "PostgreSQL", iconUrl: "https://cdn.simpleicons.org/postgresql/4169E1" },
        { name: "MongoDB", iconUrl: "https://cdn.simpleicons.org/mongodb/47A248" },
        { name: "Git", iconUrl: "https://cdn.simpleicons.org/git/F05032" },
        { name: "Docker", iconUrl: "https://cdn.simpleicons.org/docker/2496ED" },
        { name: "AWS", iconUrl: "https://skillicons.dev/icons?i=aws" },
        { name: "Postman", iconUrl: "https://cdn.simpleicons.org/postman/FF6C37" },
        { name: "Vercel", iconUrl: "https://cdn.simpleicons.org/vercel/FFFFFF" },
        { name: "Render", iconUrl: "https://cdn.simpleicons.org/render/46E3B7" },
        { name: "Bash", iconUrl: "https://cdn.simpleicons.org/gnubash/4EAA25" },
      ],
    },
    {
      category: "Concepts",
      skills: [
        { name: "Data Structures & Algorithms", lucideIcon: Cpu },
        { name: "REST APIs", lucideIcon: Globe },
        { name: "WebSockets", lucideIcon: RefreshCw },
        { name: "JWT / OAuth", lucideIcon: Key },
        { name: "LLM API Integration", lucideIcon: Bot },
        { name: "Systems Programming", lucideIcon: Settings },
      ],
    },
  ];

  return (
    <section id="skills" className="relative z-10">
      <div>
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2">
            Skills & Expertise
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded" />
        </div>

        {/* Categories Grid */}
        <div className="space-y-10">
          {skillGroups.map((group) => (
            <div key={group.category} className="space-y-4">
              <h3 className="text-sm font-semibold tracking-wider text-zinc-500 uppercase">
                {group.category}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => {
                  const LucideIcon = skill.lucideIcon;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 px-5 py-2.5 bg-zinc-100 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 rounded-full text-zinc-700 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:border-indigo-500/50 hover:bg-white dark:hover:bg-zinc-900/80 hover:shadow-indigo-glow hover:scale-[1.03] transition-all duration-300 cursor-default"
                    >
                      {skill.iconUrl ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                          src={skill.iconUrl}
                          alt={`${skill.name} icon`}
                          className="w-8 h-8 object-contain"
                          loading="lazy"
                        />
                      ) : LucideIcon ? (
                        <LucideIcon className="w-6 h-6 text-indigo-600 dark:text-cyan-400" />
                      ) : null}
                      <span className="text-sm font-semibold">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
