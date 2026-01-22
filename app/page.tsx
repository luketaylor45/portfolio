import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Projects } from "./components/Projects"
import { Links } from "./components/Links"
import { Footer } from "./components/Footer"
import { ParticleBackground } from "./components/ParticleBackground"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-500">
      <ParticleBackground />

      <main className="relative z-10 selection:bg-primary/30 selection:text-primary">
        <Navbar />
        <Hero />
        <Projects />
        <Links />
        <Footer />
      </main>
    </div>
  );
}