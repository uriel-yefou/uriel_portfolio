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
  modalImages: readonly string[];
  contributions: readonly string[];
};

function projectImage(folder: string, file: string) {
  return encodeURI(`/projects/${folder}/${file}`);
}

export const PROJECTS: readonly Project[] = [
  {
    title: "PathPilot",
    category: "AI / ML · EdTech",
    description:
      "AI career coaching platform delivering 24/7 personalized guidance on job matching, resume feedback, and interview prep.",
    technologies: [
      "LLM fine-tuning",
      "NLP & embeddings",
      "Semantic search",
      "RAG",
      "Python",
      "Cloud ML (AWS/GCP/Azure)",
    ],
    image: projectImage("Pathpilot", "1.png"),
    modalImages: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png"].map(
      (file) => projectImage("Pathpilot", file),
    ),
    contributions: [
      "Fine-tuned conversational AI for context-aware career guidance in 50+ languages",
      "Built embedding-based job matching aligned to skills and preferences beyond keywords",
      "Developed skills assessment and resume parsing pipelines from unstructured input",
      "Integrated labor market intelligence to improve recommendation accuracy",
      "Added explainability with transparent, human-readable recommendation reasoning",
    ],
  },
  {
    title: "Lyzr AI",
    category: "AI / ML · Enterprise",
    description:
      "Enterprise platform to build, deploy, govern, and scale production AI agents with multi-agent orchestration and guardrails.",
    technologies: [
      "Multi-agent orchestration",
      "LangChain / CrewAI / AutoGen",
      "RAG & vector DBs",
      "MLOps & tracing",
      "Enterprise security",
      "Python",
    ],
    image: projectImage("Lyzr", "1.png"),
    modalImages: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png"].map(
      (file) => projectImage("Lyzr", file),
    ),
    contributions: [
      "Contributed to agent orchestration with deterministic and dynamic multi-agent coordination",
      "Built guardrails: hallucination detection, toxicity filtering, and PII redaction",
      "Developed framework-agnostic integration across LangChain, CrewAI, AutoGen, and any LLM provider",
      "Shipped observability tooling for tracing, latency metrics, and run-level debugging",
      "Supported agent simulation to stress-test edge cases before production deployment",
    ],
  },
  {
    title: "Surmount",
    category: "AI / ML · FinTech",
    description:
      "AI investment platform to build, back-test, and automate data-driven trading strategies with no-code, low-code, or Python options.",
    technologies: [
      "Quant modeling",
      "Back-testing",
      "NLP sentiment analysis",
      "Python (Pandas/NumPy)",
      "Broker API integrations",
      "Financial data security",
    ],
    image: projectImage("Surmount", "1.png"),
    modalImages: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png"].map(
      (file) => projectImage("Surmount", file),
    ),
    contributions: [
      "Built back-testing infrastructure against historical macroeconomic and alternative data",
      "Developed AI strategy recommendations from rule-based and natural-language inputs",
      "Implemented sentiment analysis pipelines on financial news and social media",
      "Integrated broker-agnostic execution across multiple connected accounts",
      "Improved ETL monitoring and encryption for auditable financial data flows",
    ],
  },
  {
    title: "Everdeal",
    category: "AI / ML · Vertical SaaS",
    description:
      "Vertical SaaS (XRM) platform replacing spreadsheets with real-time, automated workflow management for auto dealerships.",
    technologies: [
      "Workflow automation",
      "Predictive analytics",
      "Python",
      "Event-driven architecture",
      "SQL",
      "Anomaly detection",
    ],
    image: projectImage("Everdeal", "1.png"),
    modalImages: ["1.png", "2.png", "3.png", "4.png", "5.png"].map((file) =>
      projectImage("Everdeal", file),
    ),
    contributions: [
      "Built workflow automation routing deals across Sales, Finance, Shop, and Accounting",
      "Implemented anomaly detection for double-selling and missing deal steps",
      "Designed performance dashboards with predictive sales and team metrics",
      "Contributed NLP for due-bill and work-order generation to reduce manual entry",
      "Built real-time data pipelines to keep cross-department information synchronized",
    ],
  },
  {
    title: "TaskFlow",
    category: "Full Stack · B2B SaaS",
    description:
      "Multi-tenant B2B app for projects, tasks, and discussion threads with strict tenant isolation, RBAC, and a FastAPI + React stack.",
    technologies: [
      "FastAPI",
      "React 19",
      "TypeScript",
      "SQLAlchemy",
      "JWT & RBAC",
      "TanStack Query",
      "Tailwind CSS",
      "Recharts",
    ],
    image: projectImage(
      "TaskFlow - Multi-Tenant Projects & Tasks Management",
      "1.png",
    ),
    modalImages: [
      "1.png",
      "2.png",
      "3.png",
      "4.png",
      "5.png",
      "6.png",
      "7.png",
      "8.png",
    ].map((file) =>
      projectImage("TaskFlow - Multi-Tenant Projects & Tasks Management", file),
    ),
    contributions: [
      "Built full-stack FastAPI + React app with tenant-scoped models, JWT auth, and Admin/Manager/Contributor RBAC",
      "Shipped CRUD, search, pagination, thread replies, audit logs, CSV export, and reporting APIs",
      "Developed protected React routes and pages for dashboard, projects, tasks, threads, and user management",
      "Added auto-archive jobs, HMAC webhooks, service account tokens, and query performance benchmarks",
    ],
  },
  {
    title: "IFC Metadata Extractor",
    category: "Backend · .NET",
    description:
      ".NET 8 console app that reads IFC building models via Xbim.Ifc, extracts element metadata, and exports structured JSON.",
    technologies: [
      "C# / .NET 8",
      "Layered architecture",
      "IFC / BIM",
      "Xbim.Ifc",
      "Data mapping",
      "JSON export",
    ],
    image: projectImage(
      "IFC Metadata Extractor - .NET 8 Layered Architecture",
      "01-solution-overview.png",
    ),
    modalImages: [
      "00-color-legend.png",
      "01-solution-overview.png",
      "02-runtime-sequence.png",
      "03-component-architecture.png",
      "04-data-pipeline.png",
      "05-ifcelement-class.png",
      "06-parent-resolution.png",
      "07-sample-hierarchy.png",
      "08-entity-pie.png",
      "09-layer-responsibilities.png",
    ].map((file) =>
      projectImage("IFC Metadata Extractor - .NET 8 Layered Architecture", file),
    ),
    contributions: [
      "Designed .NET 8 solution with StartUp, Business, and Domain projects following layered architecture",
      "Built IFCElement model and domain services to read IFC files and write JSON output",
      "Mapped IIfcRoot entities with global ID, type, description, and custom properties",
      "Resolved parent hierarchy via IfcRelAggregates, IfcRelNests, and spatial relationships",
      "Wired end-to-end IfcMetadataPipeline and validated output with Sample.ifc",
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
