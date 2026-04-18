import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Coffee, Award } from "lucide-react";

const stats = [
  { Icon: Briefcase, label: "Projects Shipped", value: "40+" },
  { Icon: Coffee, label: "Cups of Coffee", value: "2.4k" },
  { Icon: Award, label: "Years Coding", value: "5+" },
  { Icon: GraduationCap, label: "Degree", value: "B.S. CS" },
];

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
          <span className="font-mono text-xs text-neon-cyan uppercase tracking-widest">01 — About</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Engineer by craft, <span className="neon-text">creator</span> by passion.
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
            <p>
              I'm a Full Stack Software Engineer with a passion for transforming complex problems
              into elegant, performant digital experiences. My journey started with a curiosity for
              how things work — and never stopped.
            </p>
            <p>
              I graduated with a <span className="text-foreground font-medium">Bachelor's in Computer Science</span>,
              where I built a strong foundation in algorithms, systems design, and software
              engineering principles. Today, I architect end-to-end solutions across the modern
              web stack.
            </p>
            <p>
              When I'm not shipping code, you'll find me contributing to open source, mentoring
              junior devs, or exploring the intersection of design and engineering.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map(({ Icon, label, value }, i) => (
              <motion.div
                key={label}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative glass rounded-2xl p-6 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                <Icon className="w-7 h-7 text-neon-cyan mb-4 group-hover:text-neon-purple transition-colors duration-500" />
                <div className="font-display text-3xl font-bold">{value}</div>
                <div className="text-sm text-muted-foreground mt-1">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
