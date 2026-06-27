import LeftPanel from "@/components/LeftPanel";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-transparent text-zinc-900 dark:text-zinc-100 selection:bg-indigo-500/30 dark:selection:text-white">
      {/* Dynamic Cursor Glow Overlay */}
      <CursorGlow />

      {/* Floating Particles Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-32 h-32 bg-indigo-500/5 dark:bg-indigo-500/5 rounded-full blur-2xl animate-float-slow-1" />
        <div className="absolute top-[60%] right-[10%] w-48 h-48 bg-cyan-500/5 dark:bg-cyan-500/5 rounded-full blur-3xl animate-float-slow-2" />
        <div className="absolute bottom-[15%] left-[20%] w-40 h-40 bg-indigo-500/5 dark:bg-indigo-500/5 rounded-full blur-3xl animate-float-slow-3" />
      </div>

      {/* Grid Layout Container */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-0 relative z-10">
        <div className="lg:flex lg:justify-between lg:gap-12">
          {/* Left Fixed Panel */}
          <div className="lg:w-1/2 lg:max-w-[450px]">
            <LeftPanel />
          </div>

          {/* Right Scrollable Content Column */}
          <main className="lg:w-1/2 lg:py-24 space-y-12 lg:space-y-20">
            <About />
            <Skills />
            <Projects />
            <Achievements />
            <Contact />
          </main>
        </div>
      </div>
    </div>
  );
}
