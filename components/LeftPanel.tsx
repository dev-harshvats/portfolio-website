"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, Sun, Moon } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

const roles = ["Competitive Programmer", "Full-Stack Developer"];

interface NavLink {
  name: string;
  href: string;
  id: string;
}

export default function LeftPanel() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");

  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const email = "h.harshvats@gmail.com";
  const phone = "+91 9625531247";

  // Typing Roles Effect
  useEffect(() => {
    if (subIndex === roles[roleIndex].length + 1 && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setText(roles[roleIndex].substring(0, subIndex + (isDeleting ? -1 : 1)));
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, roleIndex]);

  // Theme Sync Effect
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const currentTheme = savedTheme || "dark";
    setTheme(currentTheme);
    if (currentTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Section Observer Effect for Navigation Menu
  useEffect(() => {
    const sections = ["about", "skills", "projects", "achievements", "contact"];
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "-15% 0px -65% 0px",
      threshold: 0.1,
    });

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const navLinks: NavLink[] = [
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Achievements", href: "#achievements", id: "achievements" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-full lg:flex-col lg:justify-between lg:py-24 py-12">
      <div className="flex flex-col">
        {/* Name Header */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white">
          <a href="#">Harsh Vats</a>
        </h1>

        {/* Typing roles Animator */}
        <div className="h-8 flex items-center justify-start mt-3 mb-4">
          <span className="text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600 dark:from-indigo-400 dark:to-cyan-400 border-r-2 border-indigo-500 dark:border-indigo-400 pr-1 animate-blink whitespace-nowrap">
            {text}
          </span>
        </div>

        {/* ECE DTU Tagline */}
        <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 max-w-sm leading-relaxed font-light mb-12">
          B.Tech. Student in Electronics & Communication Engineering at{" "}
          <span className="whitespace-nowrap text-zinc-900 dark:text-zinc-200 font-normal">Delhi Technological University</span> (Class of 2027) · CGPA: 8.15 / 10.0
        </p>

        {/* Vertical Navigation Menu (Desktop Only) */}
        <nav className="hidden lg:flex flex-col gap-4" aria-label="In-page section navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`group flex items-center gap-4 py-1.5 text-xs font-bold tracking-widest uppercase transition-all ${
                  isActive
                    ? "text-zinc-950 dark:text-white active"
                    : "text-zinc-400 dark:text-zinc-500 hover:text-zinc-950 dark:hover:text-white"
                }`}
              >
                <span className="h-[1px] bg-zinc-300 dark:bg-zinc-600 transition-all duration-300 w-8 group-hover:w-16 group-[.active]:w-16 group-hover:bg-zinc-950 dark:group-hover:bg-zinc-100 group-[.active]:bg-zinc-950 dark:group-[.active]:bg-zinc-100" />
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>
      </div>

      {/* Theme Toggle & Social Links (Aligned to bottom on Desktop) */}
      <div className="flex flex-col gap-6 mt-12 lg:mt-0">
        <div className="flex items-center gap-5">
          {/* Social Buttons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/dev-harshvats"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-indigo-glow flex items-center justify-center"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/vatsharsh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-white dark:hover:text-white hover:bg-[#0a66c2] hover:border-[#0a66c2] rounded-full transition-all duration-300 hover:scale-110 hover:shadow-indigo-glow flex items-center justify-center"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${email}`}
              className="p-3 bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-white dark:hover:text-white hover:bg-[#ea4335] hover:border-[#ea4335] rounded-full transition-all duration-300 hover:scale-110 hover:shadow-indigo-glow flex items-center justify-center"
              aria-label="Direct Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href={`tel:${phone}`}
              className="p-3 bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-white dark:hover:text-white hover:bg-[#0d9488] hover:border-[#0d9488] rounded-full transition-all duration-300 hover:scale-110 hover:shadow-cyan-glow flex items-center justify-center"
              aria-label="Phone Number"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>

          <span className="h-5 w-[1px] bg-zinc-200 dark:bg-zinc-800" />

          {/* Theme Toggle Button */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-3 text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-amber-500" />
              ) : (
                <Moon className="h-5 w-5 text-indigo-600" />
              )}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
