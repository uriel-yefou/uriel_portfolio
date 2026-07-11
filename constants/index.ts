import { FaFacebook } from "react-icons/fa";
import {
  RxInstagramLogo,
  RxTwitterLogo,
} from "react-icons/rx";

export const ALL_SKILLS = [
  { skill_name: "Python", image: "python.png" },
  { skill_name: "LLMs", image: "llms.png" },
  { skill_name: "LangChain", image: "langchain.png" },
  { skill_name: "PyTorch", image: "pytorch.png" },
  { skill_name: "ChatGPT", image: "chatgpt.png" },
  { skill_name: "Claude", image: "claude.png" },
  { skill_name: "Computer Vision", image: "3d-model.png" },
  { skill_name: "n8n", image: "n8n.png" },
  { skill_name: "Docker", image: "docker.png" },
  { skill_name: "Kubernetes", image: "kubernetes.png" },
  { skill_name: "MLflow", image: "mlflow.png" },
  { skill_name: "Git", image: "git.png" },
  { skill_name: "Django", image: "djang.png" },
  { skill_name: "React", image: "react.png" },
  { skill_name: "TypeScript", image: "ts.png" },
  { skill_name: "Next.js", image: "next.png" },
  { skill_name: "PostgreSQL", image: "postgresql.png" },
  { skill_name: "MongoDB", image: "mongodb.png" },
  { skill_name: "Networking", image: "networking-manager.png" },
  { skill_name: "Cyber Security", image: "cyber-security.png" },
  { skill_name: "Node.js", image: "node.png" },
  { skill_name: "Express.js", image: "express.png" },
  { skill_name: "GraphQL", image: "graphql.png" },
  { skill_name: "Prisma", image: "prisma.png" },
  { skill_name: "Tailwind CSS", image: "tailwind.png" },
  { skill_name: "HTML5", image: "html.png" },
  { skill_name: "CSS3", image: "css.png" },
  { skill_name: "JavaScript", image: "js.png" },
  { skill_name: "Material UI", image: "mui.png" },
  { skill_name: "Redux", image: "redux.png" },
  { skill_name: "React Query", image: "reactquery.png" },
  { skill_name: "Framer Motion", image: "framer.png" },
  { skill_name: "MySQL", image: "mysql.png" },
  { skill_name: "Firebase", image: "firebase.png" },
  { skill_name: "Go", image: "go.png" },
  { skill_name: "Stripe", image: "stripe.png" },
  { skill_name: "React Native", image: "reactnative.png" },
  { skill_name: "Figma", image: "figma.png" },
  { skill_name: "Tauri", image: "tauri.png" },
] as const;

/** Pyramid row sizes: widest (strongest) at top → narrowest at bottom */
export const SKILL_PYRAMID_SIZES = [13, 10, 8, 5, 3] as const;

function chunkSkills<T>(skills: readonly T[], sizes: readonly number[]): T[][] {
  const rows: T[][] = [];
  let offset = 0;

  for (const size of sizes) {
    rows.push(skills.slice(offset, offset + size) as T[]);
    offset += size;
  }

  return rows;
}

export const SKILL_PYRAMID_ROWS = chunkSkills(ALL_SKILLS, SKILL_PYRAMID_SIZES);

export const SKILL_DATA = ALL_SKILLS.slice(0, 13);
export const FRONTEND_SKILL = ALL_SKILLS.slice(13, 23);
export const BACKEND_SKILL = ALL_SKILLS.slice(23, 31);
export const FULLSTACK_SKILL = ALL_SKILLS.slice(31, 36);
export const OTHER_SKILL = ALL_SKILLS.slice(36, 39);

export const SKILL_ROWS = SKILL_PYRAMID_ROWS.map((skills, index) => ({
  id: `pyramid-${index}`,
  skills,
}));

export type Project = {
  title: string;
  category: string;
  description: string;
  technologies: readonly string[];
  image: string;
  modalImages: readonly [string, string];
  contributions: readonly string[];
};

export const PROJECTS: readonly Project[] = [
  {
    title: "Modern Next.js 14 Portfolio",
    category: "Full Stack",
    description:
      "A dynamic portfolio built with Next.js showcasing modern web development practices, responsive design, and immersive UI interactions.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/projects/project-1.png",
    modalImages: ["/projects/project-1.png", "/projects/project-2.png"],
    contributions: [
      "Architected the full-stack portfolio structure with Next.js App Router",
      "Implemented responsive layouts and scroll-driven project showcase",
      "Integrated Framer Motion animations across hero and section transitions",
      "Optimized image loading and component-level code splitting",
    ],
  },
  {
    title: "Interactive Cards Portfolio",
    category: "Frontend",
    description:
      "An interactive card-based portfolio experience with motion design, engaging layouts, and a focus on visual storytelling.",
    technologies: ["React", "JavaScript", "CSS3", "Framer Motion"],
    image: "/projects/project-2.png",
    modalImages: ["/projects/project-2.png", "/projects/project-3.png"],
    contributions: [
      "Designed card-based UI patterns with hover and motion interactions",
      "Built reusable card components with consistent visual hierarchy",
      "Crafted responsive grid layouts for multi-device support",
      "Tuned animation timing for smooth, accessible motion",
    ],
  },
  {
    title: "Space Themed Website",
    category: "Web Design",
    description:
      "A space-themed website blending cinematic visuals, Three.js elements, and a dark UI for an immersive browsing experience.",
    technologies: ["Next.js", "Three.js", "Tailwind CSS", "TypeScript"],
    image: "/projects/project-3.png",
    modalImages: ["/projects/project-3.png", "/projects/project-1.png"],
    contributions: [
      "Implemented Three.js starfield background with WebGL rendering",
      "Integrated cinematic hero video with layered z-index composition",
      "Designed dark-themed UI with purple and blue accent system",
      "Ensured pointer-events and stacking work across all interactive sections",
    ],
  },
  {
    title: "LLM Pipeline Orchestrator",
    category: "AI / ML",
    description:
      "A production-grade LLM pipeline for multi-step reasoning, tool use, and observability across agent workflows.",
    technologies: ["Python", "LangChain", "LLMs", "Docker", "MLflow"],
    image: "/projects/project-1.png",
    modalImages: ["/projects/project-1.png", "/projects/project-2.png"],
    contributions: [
      "Built multi-agent orchestration with retry and fallback strategies",
      "Added tracing and evaluation hooks for production monitoring",
      "Containerized services for reproducible deployment",
      "Documented prompt templates and versioning workflows",
    ],
  },
  {
    title: "Computer Vision QA System",
    category: "AI / ML",
    description:
      "An automated visual inspection system using deep learning models for defect detection on manufacturing lines.",
    technologies: ["PyTorch", "Python", "Docker", "Kubernetes"],
    image: "/projects/project-2.png",
    modalImages: ["/projects/project-2.png", "/projects/project-3.png"],
    contributions: [
      "Trained and fine-tuned CNN models for defect classification",
      "Deployed inference API with batch and real-time modes",
      "Set up model registry and experiment tracking with MLflow",
      "Reduced false positives through threshold tuning and data augmentation",
    ],
  },
  {
    title: "RAG Knowledge Assistant",
    category: "AI / ML",
    description:
      "A retrieval-augmented generation assistant that answers questions from internal documentation with cited sources.",
    technologies: ["LangChain", "LLMs", "PostgreSQL", "Python"],
    image: "/projects/project-3.png",
    modalImages: ["/projects/project-3.png", "/projects/project-1.png"],
    contributions: [
      "Designed chunking and embedding pipeline for document ingestion",
      "Implemented hybrid search with semantic and keyword retrieval",
      "Added source citation and confidence scoring in responses",
      "Built evaluation suite for answer quality and latency",
    ],
  },
  {
    title: "Multi-Agent Workflow Engine",
    category: "AI / ML",
    description:
      "A workflow engine coordinating specialized agents for research, coding, and review tasks in software delivery.",
    technologies: ["Python", "n8n", "LangChain", "TypeScript"],
    image: "/projects/project-1.png",
    modalImages: ["/projects/project-1.png", "/projects/project-3.png"],
    contributions: [
      "Defined agent roles, handoff protocols, and state management",
      "Integrated external tools via structured function calling",
      "Built dashboard for run history and human-in-the-loop review",
      "Hardened error handling for long-running async workflows",
    ],
  },
];

export const FOOTER_QUICK_LINKS = [
  { title: "Home", link: "#home" },
  { title: "About", link: "#about" },
  { title: "Experience", link: "#experience" },
  { title: "Projects", link: "#projects" },
  { title: "Skills", link: "#skills" },
  { title: "Contact", link: "#contact" },
] as const;

export const FOOTER_BIO =
  "Senior AI Engineer with a strong passion for building production-grade AI systems, problem-solving, and scalable solutions.";

export const NAV_LINKS = [
  {
    title: "Home",
    link: "#home",
  },
  {
    title: "About",
    link: "#about",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;

export const LINKS = {
  github: "https://github.com/nguefackuriel",
};

export const FOOTER_SOCIAL_LINKS = [
  { name: "GitHub", link: LINKS.github },
  { name: "LinkedIn", link: "https://www.linkedin.com/in/uriel-nguefack-yefou/" },
  { name: "Discord", link: "https://discord.com/users/uriel_yefou" },
] as const;

export const CONTACT_INFO = {
  email: "jordantamodjou@gmail.com",
  phone: "514-248-0144",
  location: "Montreal, QC, Canada",
  resumeUrl: "/resume/Uriel Nguefack Yefou.pdf",
} as const;

export const ABOUT_HEADING = "Senior AI Engineer & ML Specialist";

export const ABOUT_STATS = [
  { value: "15+", label: "Projects" },
  { value: "7+", label: "Years coding" },
  { value: "35+", label: "Technologies" },
] as const;

export const ABOUT_EDUCATION = [
  {
    degree: "Master's Degree, Data Science [2021-2022]",
    institution: "AIMS Cameroon",
  },
  {
    degree: "Master of Engineering, Industrial Robotics [2018-2021]",
    institution: "National Higher Polytechnic School of Douala",
  },
] as const;

export const DEVELOPER_SNIPPET = {
  name: "Uriel Nguefack Yefou",
  role: "Senior AI Engineer",
  stack: ["Python", "TypeScript", "PyTorch", "LLMs", "RAG", "MLOps"],
  focus: "production AI + automation",
  learning: true,
} as const;

export const EXPERIENCE_DATA = [
  {
    initials: "YT",
    period: "Mar 2024 - Present",
    active: true,
    title: "Senior AI Engineer",
    company: "YULCOM Technologies",
    description:
      "Led the development of enterprise AI solutions leveraging LLMs, RAG, vector databases, and semantic search while managing a team of 5 engineers. Built agentic AI systems using GPT-4, Claude, Llama, and Mistral, and deployed MLOps infrastructure with Docker, Kubernetes, and MLflow — improving production reliability by 25%.",
    technologies: [
      "Python",
      "LangChain",
      "LLMs",
      "RAG",
      "Docker",
      "Kubernetes",
      "MLflow",
    ],
    theme: "purple",
  },
  {
    initials: "MH",
    period: "Jul 2022 - Mar 2024",
    active: false,
    title: "Senior AI Research Developer",
    company: "Montreal Heart Institute",
    description:
      "Led a research initiative applying computer vision and explainable AI to genetic ancestry analysis using ECG data. Developed deep learning models with CNNs and vision transformers, and engineered reproducible pipelines with Python, PyTorch, and MLflow for clinical research teams.",
    technologies: [
      "Python",
      "PyTorch",
      "Computer Vision",
      "XAI",
      "MLflow",
      "CNNs",
    ],
    theme: "cyan",
  },
  {
    initials: "KE",
    period: "May 2021 - Jul 2022",
    active: false,
    title: "Full Stack Developer",
    company: "Kamer Engineering Solutions SARL",
    description:
      "Architected a production-grade computer vision platform for urban infrastructure management. Built a Django REST Framework backend, React.js dashboard with geospatial analytics, and integrated PostgreSQL with ML model deployment pipelines.",
    technologies: [
      "Django",
      "React",
      "Python",
      "PostgreSQL",
      "OpenCV",
      "REST APIs",
    ],
    theme: "orange",
  },
] as const;
