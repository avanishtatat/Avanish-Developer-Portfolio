import { motion } from "framer-motion";
import {
  SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss, SiReactrouter,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiSqlite, SiPython,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const categories = [
  {
    title: "Frontend",
    color: "from-neon-cyan to-neon-blue",
    skills: [
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", Icon: SiCss, color: "#1572B6" },
      { name: "React Router", Icon: SiReactrouter, color: "#CA4245" },
    ],
  },
  {
    title: "Backend",
    color: "from-neon-purple to-neon-pink",
    skills: [
      { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", Icon: SiExpress, color: "#FFFFFF" },
      { name: "REST API", Icon: TbApi, color: "#00E5FF" },
    ],
  },
  {
    title: "Databases",
    color: "from-neon-blue to-neon-purple",
    skills: [
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
      { name: "SQLite", Icon: SiSqlite, color: "#003B57" },
    ],
  },
  {
    title: "Other",
    color: "from-neon-pink to-neon-cyan",
    skills: [
      { name: "Python", Icon: SiPython, color: "#3776AB" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="font-mono text-xs text-neon-cyan uppercase tracking-widest">02 — Skills</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight">
            My <span className="neon-text">tech arsenal</span>.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            A curated stack of tools I use to build robust, scalable applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: ci * 0.1 }}
              className="relative glass rounded-2xl p-7 overflow-hidden group"
            >
              <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${cat.color} opacity-10 blur-3xl group-hover:opacity-30 transition-opacity duration-700`} />

              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display text-2xl font-bold">{cat.title}</h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(ci + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {cat.skills.map((skill, si) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: ci * 0.1 + si * 0.05 }}
                      whileHover={{ y: -4, scale: 1.05 }}
                      className="group/skill relative aspect-square rounded-xl bg-muted/50 border border-border flex flex-col items-center justify-center gap-1.5 p-2 cursor-default transition-all duration-300 hover:border-transparent hover:bg-muted"
                      style={{
                        boxShadow: "0 0 0 transparent",
                      }}
                    >
                      <skill.Icon
                        className="w-7 h-7 transition-all duration-300 group-hover/skill:scale-110"
                        style={{ color: skill.color, filter: "drop-shadow(0 0 0 transparent)" }}
                      />
                      <span className="text-[10px] font-mono text-muted-foreground text-center leading-tight">
                        {skill.name}
                      </span>
                      <div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{ boxShadow: `0 0 24px ${skill.color}55, inset 0 0 12px ${skill.color}22` }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
