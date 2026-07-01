import { motion } from "framer-motion";
import { Boxes, Layers3, Rocket } from "lucide-react";

import { skillCategories, type Skill, type SkillCategory } from "@/data/skills";

const stats = [
  {
    Icon: Boxes,
    value: "35+",
    label: "Technologies",
  },
  {
    Icon: Layers3,
    value: "6",
    label: "Skill Domains",
  },
  {
    Icon: Rocket,
    value: "10+",
    label: "Projects Built",
  },
];

interface StatCardProps {
  Icon: typeof Boxes;
  value: string;
  label: string;
  index: number;
}

const StatCard = ({ Icon, value, label, index }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="glass rounded-2xl p-5 flex items-center gap-4"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-primary-foreground" />
      </div>

      <div>
        <div className="font-display text-2xl font-bold">{value}</div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </div>
    </motion.div>
  );
};

interface SkillChipProps {
  skill: Skill;
  index: number;
}

const SkillChip = ({ skill, index }: SkillChipProps) => {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 8 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.025 }}
      whileHover={{ y: -3, scale: 1.03 }}
      className="group inline-flex items-center gap-2 rounded-full bg-muted/50 border border-border px-3 py-2 transition-all duration-300 hover:bg-muted hover:border-transparent"
      style={{
        boxShadow: "0 0 0 transparent",
      }}
    >
      <Icon
        className="w-4 h-4 transition-transform duration-300 group-hover:scale-110"
        style={{ color: skill.iconColor }}
      />
      <span className="font-mono text-xs text-muted-foreground group-hover:text-foreground transition-colors">
        {skill.name}
      </span>
    </motion.div>
  );
};

interface SkillCategoryCardProps {
  category: SkillCategory;
  index: number;
}

const SkillCategoryCard = ({ category, index }: SkillCategoryCardProps) => {
  const CategoryIcon = category.categoryIcon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="relative glass rounded-2xl p-7 overflow-hidden group"
    >
      <div
        className={`absolute -top-20 -right-20 w-44 h-44 rounded-full bg-gradient-to-br ${category.categoryGradient} opacity-10 blur-3xl group-hover:opacity-25 transition-opacity duration-700`}
      />

      <div className="relative">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div
              className={`w-11 h-11 rounded-xl bg-gradient-to-br ${category.categoryGradient} flex items-center justify-center shadow-glass`}
            >
              <CategoryIcon className="w-5 h-5 text-background" />
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-bold">
              {category.title}
            </h3>
          </div>

          <span className="font-mono text-xs text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {category.skills.map((skill, skillIndex) => (
            <SkillChip
              key={skill.name}
              skill={skill}
              index={skillIndex}
            />
          ))}
        </div>
      </div>
    </motion.article>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <span className="font-mono text-xs text-neon-cyan uppercase tracking-widest">
            03 — Skills
          </span>

          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Technologies I <span className="neon-text">work with</span>.
          </h2>

          <p className="mt-4 text-muted-foreground text-lg">
            Technologies, frameworks, cloud platforms, and AI tools I use to
            build modern full-stack applications.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              Icon={stat.Icon}
              value={stat.value}
              label={stat.label}
              index={index}
            />
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;