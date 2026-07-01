import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiReactrouter,
  SiRedux,
  SiStyledcomponents,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiMongoose,
  SiAxios,
  SiGoogle,
  SiMongodb,
  SiPostgresql,
  SiSqlite,
  SiPython,
  SiDocker,
  SiNginx,
  SiPm2,
  SiRazorpay,
  SiVercel,
  SiRender,
  SiGit,
  SiGithub,
  SiPostman,
  SiN8N,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { BrainCircuit, Cloud, Database, Wrench, Workflow, BarChart3 } from "lucide-react";
import { TbApi } from "react-icons/tb";

export interface Skill {
  name: string;
  icon: IconType;
  iconColor: string;
  level?: "Primary" | "Secondary";
}

export interface SkillCategory {
  title: string;
  categoryIcon: IconType;
  categoryGradient: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    categoryIcon: SiReact,
    categoryGradient: "from-neon-cyan to-neon-blue",
    skills: [
      { name: "React.js", icon: SiReact, iconColor: "#61DAFB", level: "Primary" },
      { name: "Next.js", icon: SiNextdotjs, iconColor: "#FFFFFF", level: "Secondary" },
      { name: "JavaScript", icon: SiJavascript, iconColor: "#F7DF1E", level: "Primary" },
      { name: "TypeScript", icon: SiTypescript, iconColor: "#3178C6", level: "Secondary" },
      { name: "HTML5", icon: SiHtml5, iconColor: "#E34F26" },
      { name: "CSS3", icon: SiCss, iconColor: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, iconColor: "#38BDF8" },
      { name: "React Router", icon: SiReactrouter, iconColor: "#CA4245" },
      { name: "Redux Toolkit", icon: SiRedux, iconColor: "#764ABC" },
      { name: "Context API", icon: SiReact, iconColor: "#61DAFB" },
      { name: "Styled Components", icon: SiStyledcomponents, iconColor: "#DB7093" },
    ],
  },
  {
    title: "Backend & APIs",
    categoryIcon: SiNodedotjs,
    categoryGradient: "from-neon-purple to-neon-pink",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, iconColor: "#339933", level: "Primary" },
      { name: "Express.js", icon: SiExpress, iconColor: "#FFFFFF", level: "Primary" },
      { name: "REST APIs", icon: TbApi, iconColor: "#00E5FF", level: "Primary" },
      { name: "JWT Authentication", icon: SiJsonwebtokens, iconColor: "#FFB300" },
      { name: "Mongoose", icon: SiMongoose, iconColor: "#880000" },
      { name: "bcrypt / bcryptjs", icon: TbApi, iconColor: "#00C853" },
      { name: "Multer", icon: TbApi, iconColor: "#FF7043" },
      { name: "Axios", icon: SiAxios, iconColor: "#5A29E4" },
    ],
  },
  {
    title: "AI Engineering",
    categoryIcon: BrainCircuit,
    categoryGradient: "from-neon-blue to-neon-cyan",
    skills: [
      { name: "Google Gemini API", icon: SiGoogle, iconColor: "#4285F4", level: "Primary" },
      { name: "Groq API", icon: TbApi, iconColor: "#F55036", level: "Primary" },
      { name: "Prompt Engineering", icon: BrainCircuit, iconColor: "#A855F7" },
      { name: "RAG", icon: BrainCircuit, iconColor: "#00E5FF" },
      { name: "Semantic Search", icon: BrainCircuit, iconColor: "#38BDF8" },
      { name: "Vector Embeddings", icon: BrainCircuit, iconColor: "#C084FC" },
      { name: "ChromaDB", icon: BrainCircuit, iconColor: "#5A67D8" },
    ],
  },
  {
    title: "Databases & Languages",
    categoryIcon: Database,
    categoryGradient: "from-emerald-400 to-green-500",
    skills: [
      { name: "MongoDB", icon: SiMongodb, iconColor: "#47A248", level: "Primary" },
      { name: "PostgreSQL", icon: SiPostgresql, iconColor: "#4169E1" },
      { name: "SQLite", icon: SiSqlite, iconColor: "#003B57" },
      { name: "SQL", icon: Database, iconColor: "#00E5FF" },
      { name: "Python", icon: SiPython, iconColor: "#3776AB" },
    ],
  },
  {
    title: "Deployment, Infrastructure & Integrations",
    categoryIcon: Cloud,
    categoryGradient: "from-orange-400 to-red-500",
    skills: [
      { name: "AWS EC2", icon: FaAws, iconColor: "#FF9900" },
      { name: "Docker", icon: SiDocker, iconColor: "#2496ED" },
      { name: "Nginx", icon: SiNginx, iconColor: "#009639" },
      { name: "PM2", icon: SiPm2, iconColor: "#2B037A" },
      { name: "Razorpay", icon: SiRazorpay, iconColor: "#528FF0" },
      { name: "Vercel", icon: SiVercel, iconColor: "#FFFFFF" },
      { name: "Render", icon: SiRender, iconColor: "#46E3B7" },
    ],
  },
  {
    title: "Tools & Automation",
    categoryIcon: Wrench,
    categoryGradient: "from-neon-pink to-neon-purple",
    skills: [
      { name: "Git", icon: SiGit, iconColor: "#F05032" },
      { name: "GitHub", icon: SiGithub, iconColor: "#FFFFFF" },
      { name: "Postman", icon: SiPostman, iconColor: "#FF6C37" },
      { name: "Bubble.io", icon: Workflow, iconColor: "#FFFFFF" },
      { name: "n8n", icon: SiN8N, iconColor: "#EA4B71" },
      { name: "Recharts", icon: BarChart3, iconColor: "#FF6384" },
      { name: "EmailJS", icon: TbApi, iconColor: "#00E5FF" },
    ],
  },
];