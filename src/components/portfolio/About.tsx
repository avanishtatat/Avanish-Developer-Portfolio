import { motion } from "framer-motion";

import { aboutCards, aboutContent } from "@/data/about";

const About = () => {
  return (
    <section id="about" className="relative py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="font-mono text-xs text-neon-cyan uppercase tracking-widest">
            01 — About
          </span>

          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight">
            {aboutContent.heading.split("modern web applications")[0]}
            <span className="neon-text">modern web applications</span>.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-5 text-muted-foreground leading-relaxed text-lg"
          >
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {aboutCards.map(({ Icon, label, value }) => (
              <motion.div
                key={label}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative glass rounded-2xl p-6 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

                <Icon className="w-7 h-7 text-neon-cyan mb-4 group-hover:text-neon-purple transition-colors duration-500" />

                <div className="font-display text-3xl font-bold">{value}</div>

                <div className="text-sm text-muted-foreground mt-1">
                  {label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;