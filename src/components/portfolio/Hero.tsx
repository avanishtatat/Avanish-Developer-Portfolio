import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Mail, Github, Linkedin, Sparkles } from "lucide-react";

const roles = [
  "Full Stack Engineer",
  "React Developer",
  "Node.js Architect",
  "Problem Solver",
];

const Hero = () => {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[idx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text === current) {
          setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text === "") {
          setDeleting(false);
          setIdx((idx + 1) % roles.length);
        }
      }
    }, deleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [text, deleting, idx]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-neon-purple/20 blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] rounded-full bg-neon-cyan/20 blur-[120px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      <div className="container relative z-10 grid lg:grid-cols-[1fr_auto] gap-12 items-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 font-mono text-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-neon-cyan" />
            <span className="text-muted-foreground">Available for freelance & full-time</span>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-balance"
          >
            Hi, I'm{" "}
            <span className="neon-text">Avanish Tiwari</span>
            <br />
            building the{" "}
            <span className="relative inline-block">
              <span className="neon-text">future</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M2 5 Q 100 -2 198 5" stroke="url(#grad)" strokeWidth="2" strokeLinecap="round" />
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="200" y2="0">
                    <stop offset="0%" stopColor="hsl(190 100% 55%)" />
                    <stop offset="100%" stopColor="hsl(280 100% 65%)" />
                  </linearGradient>
                </defs>
              </svg>
            </span>{" "}
            of the web.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 font-mono text-lg sm:text-xl text-neon-cyan h-8"
          >
            <span className="text-muted-foreground">{"> "}</span>
            {text}
            <span className="animate-blink">▌</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            Full Stack Developer building modern web applications with React.js, Node.js, and JavaScript. I create responsive interfaces, secure APIs, and practical digital solutions backed by hands-on project experience and continuous learning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-semibold hover:shadow-neon-cyan transition-all duration-300 hover:scale-105"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass neon-border font-semibold hover:bg-muted/50 transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 flex items-center gap-4"
          >
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Find me</span>
            <div className="h-px w-10 bg-border" />
            {[
              { Icon: Github, href: "https://github.com/avanishtatat" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/avanishtiwari18" },
              { Icon: Mail, href: "mailto:avanisht.at.at@gmail.com" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:text-neon-cyan hover:shadow-neon-cyan transition-all duration-300 hover:-translate-y-0.5"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:block relative"
        >
          <div className="relative w-80 h-80 animate-float">
            <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-30 rounded-full" />
            <div className="relative w-full h-full glass-strong rounded-3xl p-6 flex flex-col justify-between border border-neon-purple/30">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <pre className="font-mono text-xs leading-relaxed text-muted-foreground">
{`const dev = {
  name: "Avanish Tiwari",
  stack: ["React", "Node",
    "JavaScript", "MongoDB"],
  passion: "building",
  coffee: Infinity,
  available: true,
};

dev.create(amazing);`}
              </pre>
              <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground">
                <span>~/portfolio</span>
                <span className="text-neon-cyan">● online</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
