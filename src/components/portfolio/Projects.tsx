import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

import {
  projects,
  projectFilters,
  type Project,
  type ProjectType,
} from "@/data/projects";

const matchesFilter = (project: Project, filter: "All" | ProjectType) => {
  if (filter === "All") return true;
  return project.projectTypes.includes(filter);
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.5,
        delay: (index % 3) * 0.08,
      }}
      whileHover={{ y: -8 }}
      className="group glass rounded-2xl overflow-hidden flex flex-col"
    >
      <div
        className={`relative h-44 bg-gradient-to-br ${project.gradient} overflow-hidden`}
      >
        <div className="absolute inset-0 grid-bg opacity-20" />

        <div className="absolute inset-0 flex items-center justify-center text-7xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
          {project.emoji}
        </div>

        <div className="absolute top-4 right-4 glass-strong rounded-full px-3 py-1">
          <span className="font-mono text-[10px] uppercase tracking-widest">
            {project.projectTypes[0]}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-display text-xl font-bold group-hover:text-neon-cyan transition-colors">
          {project.title}
        </h3>

        <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md bg-muted/60 border border-border font-mono text-[10px]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-6 pt-5 border-t border-border">
          {project.links.live && (
            <a
              href={project.links.live}
              aria-label={`Open live demo for ${project.title}`}
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:shadow-neon-cyan transition-all"
            >
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
              Live
            </a>
          )}

          {project.links.github && (
            <a
              href={project.links.github}
              aria-label={`View source code for ${project.title} on GitHub`}
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg glass border border-border px-4 py-2.5 text-sm font-semibold hover:border-neon-purple transition-colors"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState<"All" | ProjectType>("All");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => matchesFilter(project, filter));
  }, [filter]);

  const featuredProjects = filteredProjects.filter(
    (project) => project.featured,
  );

  const additionalProjects = filteredProjects.filter(
    (project) => !project.featured && !project.confidential,
  );

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
            <span className="font-mono text-xs text-neon-cyan uppercase tracking-widest">
              02 — Projects
            </span>

            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight">
              Featured <span className="neon-text">projects</span>.
            </h2>

            <p className="mt-4 text-muted-foreground text-lg">
              A curated selection of full-stack, AI-powered, and frontend
              projects that reflect my current engineering focus.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 glass rounded-full p-1.5">
            {projectFilters.map((filterItem) => (
              <button
                key={filterItem}
                type="button"
                onClick={() => setFilter(filterItem)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === filterItem
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {filter === filterItem && (
                  <motion.span
                    layoutId="filter-active"
                    className="absolute inset-0 rounded-full bg-gradient-primary -z-10"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
                {filterItem}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>
        {additionalProjects.length > 0 && (
          <div className="mt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mb-10"
            >
              <span className="font-mono text-xs text-neon-cyan uppercase tracking-widest">
                More Work
              </span>

              <h3 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight">
                Additional <span className="neon-text">projects</span>.
              </h3>

              <p className="mt-3 text-muted-foreground">
                Earlier projects and experiments that helped me strengthen
                frontend, backend, API integration, and deployment skills.
              </p>
            </motion.div>

            <motion.div
              layout
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {additionalProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
