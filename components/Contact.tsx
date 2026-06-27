"use client";

import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Contact() {
  const email = "h.harshvats@gmail.com";
  const phone = "+91 9625531247";

  return (
    <section id="contact" className="relative z-10 border-t border-zinc-200 dark:border-zinc-900 pt-12 lg:pt-16 pb-12 transition-colors duration-300">
      <div className="text-center">
        {/* Heading */}
        <span className="text-sm font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase mb-3 inline-block">
          Get In Touch
        </span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6">
          {"Let's build something together."}
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto mb-10 font-light leading-relaxed">
          {"I'm currently looking for software engineering internships and open-source collaborations. Whether you have a question or just want to say hi, feel free to reach out!"}
        </p>

        {/* Minimal Social & Contact Links */}
        <div className="flex items-center justify-center gap-5">
          <a
            href="https://github.com/dev-harshvats"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-indigo-glow flex items-center justify-center"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/in/vatsharsh"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-white dark:hover:text-white hover:bg-[#0a66c2] hover:border-[#0a66c2] rounded-full transition-all duration-300 hover:scale-110 hover:shadow-indigo-glow flex items-center justify-center"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="h-6 w-6" />
          </a>
          <a
            href={`mailto:${email}`}
            className="p-3.5 bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-white dark:hover:text-white hover:bg-[#ea4335] hover:border-[#ea4335] rounded-full transition-all duration-300 hover:scale-110 hover:shadow-indigo-glow flex items-center justify-center"
            aria-label="Direct Email"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a
            href={`tel:${phone}`}
            className="p-3.5 bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-white dark:hover:text-white hover:bg-[#0d9488] hover:border-[#0d9488] rounded-full transition-all duration-300 hover:scale-110 hover:shadow-cyan-glow flex items-center justify-center"
            aria-label="Phone Number"
          >
            <Phone className="h-6 w-6" />
          </a>
        </div>

        {/* Footer info */}
        <div className="mt-20 text-xs text-zinc-400 dark:text-zinc-500 font-light select-none">
          <p>© {new Date().getFullYear()} Harsh Vats. Built with Next.js & Tailwind CSS.</p>
        </div>
      </div>
    </section>
  );
}
