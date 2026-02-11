import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { MouseSpotlight } from "@/components/MouseSpotlight";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-500/30 font-sans">
      <Navbar />
      <MouseSpotlight />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      {/* Global Grain/Noise Overlay - SVG Data URI for offline support */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.05] z-[100] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`
        }}
      ></div>
    </main>
  );
}
