import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Rocket } from "lucide-react";

const items = [
  {
    Icon: Rocket,
    date: "Jun 2025 — Present",
    title: "Full Stack Development Trainee",
    org: "NxtWave CCBP 4.0 Intensive",
    desc: "Completed hands-on training in React.js, Node.js, JavaScript, databases, and modern web development. Built real-world projects and earned the Industry Ready Certificate (IRC).",
    color: "from-neon-cyan to-neon-purple",
  },
  {
    Icon: Briefcase,
    date: "Sep 2024 — Apr 2025",
    title: "Competitive Exam Preparation",
    org: "Self-Directed Learning",
    desc: "Dedicated focused time to banking exam preparation, strengthening logical reasoning, quantitative aptitude, consistency, and disciplined problem-solving skills.",
    color: "from-neon-purple to-neon-pink",
  },
  {
    Icon: Briefcase,
    date: "Jun 2021 — Aug 2022",
    title: "Professional Associate",
    org: "Vaya Finserv Pvt. Ltd.",
    desc: "Managed customer relationships, handled operational tasks, and developed strong communication, teamwork, and business problem-solving skills in a target-driven environment.",
    color: "from-neon-blue to-neon-cyan",
  },
  {
    Icon: GraduationCap,
    date: "2017 — 2020",
    title: "Bachelor of Commerce (B.Com)",
    org: "MGKVP University",
    desc: "Built a foundation in business studies, communication, analytical thinking, and professional discipline that supports my transition into software development.",
    color: "from-neon-pink to-neon-purple",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="font-mono text-xs text-neon-cyan uppercase tracking-widest">04 — Experience</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight">
            My <span className="neon-text">journey</span> so far.
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-purple to-transparent md:-translate-x-px" />

          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`relative mb-12 md:grid md:grid-cols-2 md:gap-12 ${
                i % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"
              }`}
            >
              <div className={`pl-16 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"}`}>
                <div className={`absolute left-6 md:left-1/2 top-2 w-4 h-4 rounded-full bg-gradient-to-br ${item.color} -translate-x-1/2 ring-4 ring-background z-10 shadow-neon-purple`} />

                <div className="glass rounded-2xl p-6 hover:shadow-elevated transition-shadow duration-500">
                  <div className={`inline-flex items-center gap-2 mb-3 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                      <item.Icon className="w-4 h-4 text-background" />
                    </div>
                    <span className="font-mono text-xs text-neon-cyan">{item.date}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium mt-1">{item.org}</p>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
