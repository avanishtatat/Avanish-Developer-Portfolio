import { motion } from "framer-motion";
import { Lock, Workflow, BrainCircuit } from "lucide-react";

const works = [
  {
    Icon: BrainCircuit,
    title: "AI-Powered Customer Support Platform",
    description:
      "Built a full-stack customer support platform where AI automatically classified incoming requests by category and priority. Developed an admin dashboard with AI-generated response drafts, internal collaboration notes, and near real-time request updates using polling.",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Google Gemini",
      "Polling",
      "REST APIs",
    ],
  },
  {
    Icon: Workflow,
    title: "AI Business Automation Platform",
    description:
      "Built a full-stack business automation platform using Bubble.io and n8n that integrated databases, external APIs, and AI services to automate workflows and generate professional email summaries, reducing manual effort.",
    tags: [
      "Bubble.io",
      "n8n",
      "Groq API",
      "API Integration",
      "Workflow Automation",
      "Low-Code Development",
    ],
  },
];

const ConfidentialWork = () => {
  return (
    <section id="technical-assessments" className="relative py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <span className="font-mono text-xs text-neon-cyan uppercase tracking-widest">
            Technical Assessments
          </span>

          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Industry-style{" "}
            <span className="neon-text">technical assessments</span>.
          </h2>

          <p className="mt-4 text-muted-foreground text-lg">
            Industry-style engineering challenges completed as part of technical
            assessment processes. These projects demonstrate full-stack
            development, AI integration, and workflow automation while omitting
            implementation details to respect assessment confidentiality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {works.map(({ Icon, title, description, tags }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl p-7"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary-foreground" />
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-muted/60 border border-border font-mono text-[10px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-border flex items-center gap-2 text-sm text-muted-foreground">
                <Lock className="w-4 h-4 text-neon-cyan" />
                Some implementation details are intentionally omitted to respect assessment confidentiality.
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConfidentialWork;
