export type ProjectType = "AI" | "Full Stack" | "Frontend" | "Backend";
export type OriginType = "Personal" | "Learning" | "Assignment" | "Confidential";

export interface ProjectLinks {
    live?: string;
    github?: string;
    youtube?: string;
    article?: string;
}

export interface Project {
    title: string;
    description: string;

    tags: string[];

    projectTypes: ProjectType[];
    origin: OriginType;

    featured: boolean;
    confidential?: boolean;

    links: ProjectLinks;

    gradient: string;
    emoji: string;
}

export const projects: Project[] = [
  {
    title: "VoyageMind AI – AI Travel Planner",
    description:
      "AI-powered travel planning platform that generates personalized day-wise itineraries, hotel recommendations, estimated budgets, destination-specific safety tips, and AI-assisted itinerary regeneration.",
    tags: ["Next.js", "Express.js", "MongoDB", "Gemini AI", "JWT"],
    projectTypes: ["AI", "Full Stack"],
    origin: "Assignment",
    featured: true,
    links: {
      live: "https://ai-travel-planner-beta-orpin.vercel.app",
      github: "https://github.com/avanishtatat/ai-travel-planner",
    },
    gradient: "from-neon-blue via-neon-cyan to-neon-purple",
    emoji: "🌍",
  },
  {
    title: "NxtTrendz – Full Stack E-Commerce Platform",
    description:
      "Production-ready MERN e-commerce platform with JWT authentication, Razorpay payments, persistent cart management, Prime subscriptions, and AWS EC2 deployment using Nginx and PM2.",
    tags: ["React", "Node.js", "MongoDB", "AWS EC2", "Razorpay"],
    projectTypes: ["Full Stack"],
    origin: "Learning",
    featured: true,
    links: {
      live: "http://13.207.106.94",
      github: "https://github.com/avanishtatat/nxttrendz",
    },
    gradient: "from-neon-pink to-neon-cyan",
    emoji: "🛒",
  },
  {
    title: "ResolveAI – AI Customer Support Platform",
    description:
      "RAG-based customer support assistant using Gemini and ChromaDB to answer queries from knowledge-base documents with persona classification, semantic search, and escalation handling.",
    tags: ["Python", "Streamlit", "Gemini AI", "ChromaDB", "RAG"],
    projectTypes: ["AI"],
    origin: "Assignment",
    featured: true,
    links: {
      live: "https://ai-persona-support-agent-ja2ydakgcx4sla3gpzyczh.streamlit.app/",
      github: "https://github.com/avanishtatat/ai-persona-support-agent",
    },
    gradient: "from-neon-purple via-neon-pink to-neon-cyan",
    emoji: "🤖",
  },
  {
    title: "CodeBuddy – AI Coding Assistant",
    description:
      "Full-stack AI coding assistant with JWT authentication, Groq API integration, conversation memory, persistent chat history, pagination, and syntax-highlighted markdown responses.",
    tags: ["React", "Node.js", "MongoDB", "Groq AI", "JWT"],
    projectTypes: ["AI", "Full Stack"],
    origin: "Personal",
    featured: true,
    links: {
      live: "https://avanish-codebuddy.vercel.app",
      github: "https://github.com/avanishtatat/codebuddy",
    },
    gradient: "from-neon-blue via-neon-cyan to-neon-purple",
    emoji: "💻",
  },
  {
    title: "PearMedia AI Studio",
    description:
      "Full-stack AI media platform for prompt enhancement, image generation, and creative image variations using secure backend API integrations.",
    tags: ["React", "Node.js", "Express", "Gemini AI", "Hugging Face"],
    projectTypes: ["AI", "Full Stack"],
    origin: "Assignment",
    featured: false,
    links: {
      live: "https://avanishpearmediaaistudioui.vercel.app/",
      github: "https://github.com/avanishtatat/pear-media-ai",
    },
    gradient: "from-neon-cyan via-neon-blue to-neon-purple",
    emoji: "✨",
  },
  {
    title: "Expense Tracker – Personal Finance Dashboard",
    description:
      "MERN-based finance dashboard for tracking income and expenses with authentication, analytics charts, profile image upload, and Excel report export.",
    tags: ["React", "Node.js", "MongoDB", "JWT", "Recharts"],
    projectTypes: ["Full Stack"],
    origin: "Personal",
    featured: false,
    links: {
      live: "https://avanish-expense-tracker.vercel.app/",
      github: "https://github.com/avanishtatat/EXPENSE-TRACKER",
    },
    gradient: "from-neon-purple to-neon-pink",
    emoji: "💰",
  },
  {
    title: "Voice AI Agent – Doctor Appointment System",
    description:
      "FastAPI backend for doctor appointment booking workflows with PostgreSQL, REST APIs, appointment validation, and API documentation support.",
    tags: ["FastAPI", "Python", "PostgreSQL", "REST API", "Docker"],
    projectTypes: ["Backend"],
    origin: "Assignment",
    featured: false,
    links: {
      live: "https://voice-ai-agent-6e7o.onrender.com/docs",
      github: "https://github.com/avanishtatat/voice-ai-agent",
    },
    gradient: "from-neon-purple via-neon-pink to-neon-cyan",
    emoji: "🎙️",
  },
  {
    title: "Jobby App – Job Search Platform",
    description:
      "Responsive job search application with secure login, protected routes, job filtering, search functionality, and REST API integration.",
    tags: ["React", "REST API", "JWT", "CSS"],
    projectTypes: ["Frontend"],
    origin: "Learning",
    featured: false,
    links: {
      live: "https://jobby-app-sage-phi.vercel.app/",
      github: "https://github.com/avanishtatat/Jobby-App",
    },
    gradient: "from-neon-blue to-neon-purple",
    emoji: "💼",
  },
  {
    title: "NxtWatch – Video Streaming Platform",
    description:
      "YouTube-inspired video streaming platform with login, search, trending videos, gaming videos, saved videos, and theme switching.",
    tags: ["React", "REST API", "Authentication", "Styled Components"],
    projectTypes: ["Frontend"],
    origin: "Learning",
    featured: false,
    links: {
      live: "https://avanishnxtwatch.ccbp.tech/",
      github: "https://github.com/avanishtatat/NxtWatch",
    },
    gradient: "from-neon-cyan to-neon-purple",
    emoji: "📺",
  },
  {
    title: "Restaurant App – Food Ordering Platform",
    description:
      "Food ordering application with dynamic menu rendering, category filtering, cart functionality, authentication, and responsive UI.",
    tags: ["React", "Authentication", "Cart System", "Responsive UI"],
    projectTypes: ["Frontend"],
    origin: "Learning",
    featured: false,
    links: {
      live: "https://avanisrestocafe.ccbp.tech/",
      github: "https://github.com/avanishtatat/Restaurant-app-2",
    },
    gradient: "from-neon-purple to-neon-blue",
    emoji: "🍽️",
  },
];

export const projectFilters: Array<"All" | ProjectType> = [
  "All",
  "AI",
  "Full Stack",
  "Frontend",
  "Backend",
];