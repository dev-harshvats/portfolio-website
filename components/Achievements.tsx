"use client";

interface Achievement {
  title: string;
  subtitle: string;
  icon: string;
}

export default function Achievements() {
  const achievementsList: Achievement[] = [
    {
      title: "1st Place, DevHack",
      subtitle: "General Track, Parsec-2025 at IIT Dharwad.",
      icon: "🥇",
    },
    {
      title: "2nd Place, AlgoStrike",
      subtitle: "Competitive Programming Contest, Parsec-2025 at IIT Dharwad.",
      icon: "🥈",
    },
    {
      title: "700+ DSA Problems Solved",
      subtitle: "Consistently solving complex algorithm challenges across LeetCode, GeeksforGeeks, and Codeforces.",
      icon: "💻",
    },
  ];

  return (
    <section id="achievements" className="relative z-10">
      <div>
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2">
            Achievements
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded" />
        </div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsList.map((achievement, idx) => (
            <div
              key={idx}
              className="relative p-6 bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 rounded-2xl transition-all duration-300 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/60 hover:shadow-indigo-glow hover:-translate-y-1 group shadow-sm flex flex-col gap-4"
            >
              {/* Icon Container with subtle gradient backdrop */}
              <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100/50 dark:border-indigo-900/30 flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-transform duration-300 select-none">
                {achievement.icon}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1.5">
                <h3 className="font-bold text-zinc-900 dark:text-white text-lg tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                  {achievement.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                  {achievement.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
