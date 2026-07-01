import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Sparkles,
  Download,
  Cloud,
  Bot,
  ShieldCheck,
} from "lucide-react";

const roles = [
  "Full Stack Developer",
  "React.js Developer",
  "Node.js Developer",
  "AI Application Builder",
];

const capabilityBadges = [
  { Icon: Cloud, label: "AWS Deployment" },
  { Icon: Bot, label: "AI Integrations" },
  { Icon: ShieldCheck, label: "Secure REST APIs" },
];

const quickStats = [
  { value: "10+", label: "Projects Built" },
  { value: "MERN", label: "Stack" },
  { value: "AI", label: "Development" },
];

const socialLinks = [
  { Icon: Github, href: "https://github.com/avanishtatat" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/avanishtiwari18" },
  { Icon: Mail, href: "mailto:avanisht.at.at@gmail.com" },
];

const Hero = () => {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[idx];
    const timeout = setTimeout(
      () => {
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
      },
      deleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, idx]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-neon-purple/20 blur-[120px] animate-glow-pulse" />
      <div
        className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] rounded-full bg-neon-cyan/20 blur-[120px] animate-glow-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="container relative z-10 grid lg:grid-cols-[1fr_auto] gap-12 items-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 font-mono text-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-neon-cyan" />
            <span className="text-muted-foreground">
              Open to Software Development Opportunities
            </span>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight text-balance"
          >
            Hi, I'm <span className="neon-text">Avanish Tiwari</span>
            <br />
            Building modern web apps with{" "}
            <span className="neon-text">React, Node.js & AI.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 font-mono text-lg sm:text-xl text-neon-cyan h-8 min-w-[280px] sm:min-w-[340px]"
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
            Full Stack Developer specializing in React.js, Node.js, and
            AI-powered applications. Built 10+ projects—including e-commerce
            platforms, AI assistants, and travel planners—with secure backend
            architecture, cloud deployment, and modern user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.48 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            {capabilityBadges.map(({ Icon, label }) => (
              <div
                key={label}
                className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-muted-foreground"
              >
                <Icon className="w-4 h-4 text-neon-cyan" />
                <span>{label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-7 grid grid-cols-3 gap-3 max-w-md"
          >
            {quickStats.map((stat) => (
              <div key={stat.label} className="glass rounded-2xl p-4">
                <div className="font-display text-2xl font-bold neon-text">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.62 }}
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
              href="/Avanish_Tiwari_Full_Stack_Developer_Resume.pdf"
              download
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass neon-border font-semibold hover:bg-muted/50 transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>
          <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.72 }}
  className="mt-8 flex items-center gap-4 lg:hidden"
>
  <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
    Find me
  </span>
  <div className="h-px w-10 bg-border" />

  {socialLinks.map(({ Icon, href }, i) => (
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
          className="hidden lg:block relative self-start mt-36"
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
                {`const developer = {
  name: "Avanish",
  role: "Full Stack Developer",
  stack: ["React", "Node.js",
    "MongoDB", "AI"],
  projects: "10+",
  focus: "building",
  openToWork: true,
};

developer.create(value);`}
              </pre>

              <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground">
                <span>~/portfolio</span>
                <span className="text-neon-cyan">● online</span>
              </div>
            </div>
          </div>
          <div className="mt-8 hidden lg:flex items-center justify-center gap-4">
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
              Find me
            </span>
            <div className="h-px w-10 bg-border" />

            {socialLinks.map(({ Icon, href }, i) => (
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
