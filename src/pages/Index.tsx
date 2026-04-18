import { useEffect } from "react";
import LoadingScreen from "@/components/portfolio/LoadingScreen";
import ParticleBackground from "@/components/portfolio/ParticleBackground";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Experience from "@/components/portfolio/Experience";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Avanish Tiwari — Full Stack Developer";
    const meta = document.querySelector('meta[name="description"]');
    const content =
      "Avanish Tiwari is a Full Stack Developer skilled in React.js, Node.js, JavaScript, MongoDB, and modern web technologies. Explore projects, skills, and experience.";
    if (meta) meta.setAttribute("content", content);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = content;
      document.head.appendChild(m);
    }

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.origin + "/";
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <LoadingScreen />
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
