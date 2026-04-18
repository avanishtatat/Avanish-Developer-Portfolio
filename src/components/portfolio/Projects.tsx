import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  category: string;
  demo: string;
  repo: string;
  gradient: string;
  emoji: string;
};

const projects: Project[] = [
  {
    title: "NebulaCommerce",
    description: "A full-stack e-commerce platform with Stripe payments, real-time inventory, and admin analytics dashboard.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    category: "Full Stack",
    demo: "#",
    repo: "#",
    gradient: "from-neon-cyan via-neon-blue to-neon-purple",
    emoji: "🛒",
  },
  {
    title: "TaskOrbit",
    description: "Collaborative task management with real-time sync, drag-and-drop kanban boards, and team workspaces.",
    tags: ["React", "TypeScript", "Express", "MongoDB"],
    category: "Full Stack",
    demo: "#",
    repo: "#",
    gradient: "from-neon-purple to-neon-pink",
    emoji: "📋",
  },
  {
    title: "PulseChat",
    description: "Real-time messaging app with WebSocket connections, end-to-end encryption, and rich media support.",
    tags: ["React", "Node.js", "Socket.io", "Postgres"],
    category: "Frontend",
    demo: "#",
    repo: "#",
    gradient: "from-neon-pink to-neon-cyan",
    emoji: "💬",
  },
  {
    title: "DataForge API",
    description: "RESTful API service with rate limiting, JWT auth, and comprehensive OpenAPI documentation.",
    tags: ["Node.js", "Express", "PostgreSQL", "Docker"],
    category: "Backend",
    demo: "#",
    repo: "#",
    gradient: "from-neon-blue to-neon-purple",
    emoji: "⚡",
  },
  {
    title: "QuantumNotes",
    description: "Markdown-first note-taking app with offline-first architecture and seamless cloud sync.",
    tags: ["React", "TypeScript", "SQLite", "PWA"],
    category: "Frontend",
    demo: "#",
    repo: "#",
    gradient: "from-neon-cyan to-neon-purple",
    emoji: "📝",
  },
  {
    title: "PyAnalytics",
    description: "Data pipeline and visualization tool processing millions of events per day with Python and React.",
    tags: ["Python", "React", "PostgreSQL"],
    category: "Backend",
    demo: "#",
    repo: "#",
    gradient: "from-neon-purple to-neon-blue",
    emoji: "📊",
  },
];

const filters = ["All", "Full Stack", "Frontend", "Backend"];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-end justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl">
            <span className="font-mono text-xs text-neon-cyan uppercase tracking-widest">03 — Projects</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight">
              Selected <span className="neon-text">work</span>.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 glass rounded-full p-1.5">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === f ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {filter === f && (
                  <motion.span
                    layoutId="filter-active"
                    className="absolute inset-0 rounded-full bg-gradient-primary -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative glass rounded-2xl overflow-hidden flex flex-col"
            >
              <div className={`relative h-44 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center text-7xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  {p.emoji}
                </div>
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full glass-strong text-[10px] font-mono uppercase tracking-wider">
                  {p.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-xl font-bold mb-2 group-hover:text-neon-cyan transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-muted/60 border border-border text-[10px] font-mono text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 mt-5 pt-5 border-t border-border">
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-primary text-primary-foreground text-sm font-medium hover:shadow-neon-cyan transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Demo
                  </a>
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg glass border border-border text-sm font-medium hover:border-neon-purple transition-all"
                  >
                    <Github className="w-3.5 h-3.5" /> Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
