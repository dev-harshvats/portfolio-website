"use client";

import { GraduationCap, Calendar, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative z-10">
      <div>
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2">
            About Me
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded" />
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Bio (Left 3 columns) */}
          <div className="md:col-span-3 space-y-6">
            <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed font-light">
              {"I'm"} an Electronics & Communication Engineering student at{" "}
              <span className="whitespace-nowrap text-zinc-900 dark:text-white font-medium">Delhi Technological University</span> (Class of 2027),
              maintaining a B.Tech CGPA of <span className="text-indigo-600 dark:text-cyan-400 font-semibold">8.20 / 10.0</span>.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              I am highly passionate about software engineering and systems programming, specializing in data structures, algorithms, and building performant full-stack products. Having solved over{" "}
              <span className="text-indigo-500 dark:text-indigo-400 font-semibold">700+ DSA problems</span> across LeetCode, GeeksforGeeks, and Codeforces, I thrive on tackling complex algorithmic challenges and optimizing performance at scale.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              My engineering journey is driven by curiosity—from building low-latency WebSocket communication layers and AI-powered automation to translating assembly instructions into machine binary. I am currently targeting software engineering internships at Big Tech organizations and active open-source contributions.
            </p>
          </div>

          {/* Education timeline (Right 2 columns) */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white flex items-center gap-2 mb-4">
              <GraduationCap className="h-5 w-5 text-indigo-500 dark:text-indigo-400" />
              Education
            </h3>

            <div className="space-y-6 border-l-2 border-zinc-200 dark:border-zinc-800 pl-6 ml-3">
              {/* DTU */}
              <div className="relative">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-50 dark:border-near-black" />
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold text-zinc-900 dark:text-white text-base">
                    Delhi Technological University
                  </h4>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">B.Tech. in Electronics & Communication Engineering</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-zinc-400 dark:text-zinc-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    2023 – Present
                  </span>
                  <span className="flex items-center gap-1">
                    <Award className="h-3 w-3" />
                    CGPA: 8.20 / 10.0
                  </span>
                </div>
              </div>

              {/* St. Columbus School */}
              <div className="relative">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-50 dark:border-near-black" />
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold text-zinc-900 dark:text-white text-base">
                    St. Columbus School
                  </h4>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">CBSE Class XII</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-zinc-400 dark:text-zinc-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    2021
                  </span>
                  <span className="flex items-center gap-1">
                    <Award className="h-3 w-3" />
                    Score: 92.60%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
