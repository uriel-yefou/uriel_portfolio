import Image from "next/image";

const OUTER_NODES = [
  { x: 36.22339643485677, y: 16.74033682959368, image: "docker.png", alt: "Docker" },
  { x: 63.77660356514323, y: 16.74033682959368, image: "js.png", alt: "JavaScript" },
  { x: 83.25966317040633, y: 36.22339643485677, image: "react.png", alt: "React" },
  { x: 83.25966317040633, y: 63.77660356514323, image: "postgresql.png", alt: "PostgreSQL" },
  { x: 63.77660356514323, y: 83.25966317040633, image: "3d-model.png", alt: "3D Model" },
  { x: 36.22339643485677, y: 83.25966317040633, image: "next.png", alt: "Next.js" },
  { x: 16.74033682959368, y: 63.77660356514323, image: "prisma.png", alt: "Prisma" },
  { x: 16.74033682959368, y: 36.22339643485677, image: "ts.png", alt: "TypeScript" },
] as const;

const INNER_NODES = [
  { x: 50, y: 33.37, image: "llms.png", alt: "LLMs" },
  { x: 66.63, y: 50, image: "pytorch.png", alt: "Pytorch" },
  { x: 50, y: 66.63, image: "graphql.png", alt: "GraphQL" },
  { x: 33.37, y: 50, image: "langchain.png", alt: "LangChain" },
] as const;

const CENTER_NODE = {
  x: 50,
  y: 50,
  image: "python.png",
  alt: "Python",
} as const;

type TechNodeProps = {
  x: number;
  y: number;
  image: string;
  alt: string;
  size: number;
};

function TechNode({ x, y, image, alt, size }: TechNodeProps) {
  return (
    <div
      className="absolute flex items-center justify-center rounded-xl border border-[#7042f88b] bg-[rgba(255,255,255,0.05)] shadow-[0_0_16px_rgba(139,92,246,0.25)] backdrop-blur-sm"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        transform: "translate(-50%, -50%)",
      }}
    >
      <Image
        src={`/skills/${image}`}
        alt={alt}
        width={size * 0.55}
        height={size * 0.55}
        draggable={false}
        className="select-none object-contain"
      />
    </div>
  );
}

export const HeroTechWeb = () => {
  return (
    <div className="relative h-[650px] w-[650px] select-none">
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="hero-spoke-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.15" />
          </linearGradient>
          <radialGradient id="hero-hub-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#8b5cf6" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="50" cy="50" r="18" fill="url(#hero-hub-glow)" />
        <circle
          cx="50"
          cy="50"
          r="37"
          fill="none"
          stroke="#a78bfa"
          strokeOpacity="0.25"
          strokeWidth="0.18"
          strokeDasharray="0.6 1.4"
        />
        <circle
          cx="50"
          cy="50"
          r="19"
          fill="none"
          stroke="#a78bfa"
          strokeOpacity="0.18"
          strokeWidth="0.15"
        />

        <line x1="50" y1="50" x2="36.22339643485677" y2="16.74033682959368" stroke="url(#hero-spoke-grad)" strokeWidth="0.2" />
        <line x1="50" y1="50" x2="63.77660356514323" y2="16.74033682959368" stroke="url(#hero-spoke-grad)" strokeWidth="0.2" />
        <line x1="50" y1="50" x2="83.25966317040633" y2="36.22339643485677" stroke="url(#hero-spoke-grad)" strokeWidth="0.2" />
        <line x1="50" y1="50" x2="83.25966317040633" y2="63.77660356514323" stroke="url(#hero-spoke-grad)" strokeWidth="0.2" />
        <line x1="50" y1="50" x2="63.77660356514323" y2="83.25966317040633" stroke="url(#hero-spoke-grad)" strokeWidth="0.2" />
        <line x1="50" y1="50" x2="36.22339643485677" y2="83.25966317040633" stroke="url(#hero-spoke-grad)" strokeWidth="0.2" />
        <line x1="50" y1="50" x2="16.74033682959368" y2="63.77660356514323" stroke="url(#hero-spoke-grad)" strokeWidth="0.2" />
        <line x1="50" y1="50" x2="16.74033682959368" y2="36.22339643485677" stroke="url(#hero-spoke-grad)" strokeWidth="0.2" />

        <line x1="36.22339643485677" y1="16.74033682959368" x2="83.25966317040633" y2="63.77660356514323" stroke="#a78bfa" strokeOpacity="0.22" strokeWidth="0.18" />
        <line x1="63.77660356514323" y1="16.74033682959368" x2="63.77660356514323" y2="83.25966317040633" stroke="#a78bfa" strokeOpacity="0.22" strokeWidth="0.18" />
        <line x1="83.25966317040633" y1="36.22339643485677" x2="36.22339643485677" y2="83.25966317040633" stroke="#a78bfa" strokeOpacity="0.22" strokeWidth="0.18" />
        <line x1="83.25966317040633" y1="63.77660356514323" x2="16.74033682959368" y2="63.77660356514323" stroke="#a78bfa" strokeOpacity="0.22" strokeWidth="0.18" />
        <line x1="63.77660356514323" y1="83.25966317040633" x2="16.74033682959368" y2="36.22339643485677" stroke="#a78bfa" strokeOpacity="0.22" strokeWidth="0.18" />
        <line x1="36.22339643485677" y1="83.25966317040633" x2="36.22339643485677" y2="16.74033682959368" stroke="#a78bfa" strokeOpacity="0.22" strokeWidth="0.18" />
        <line x1="16.74033682959368" y1="63.77660356514323" x2="63.77660356514323" y2="16.74033682959368" stroke="#a78bfa" strokeOpacity="0.22" strokeWidth="0.18" />
        <line x1="16.74033682959368" y1="36.22339643485677" x2="83.25966317040633" y2="36.22339643485677" stroke="#a78bfa" strokeOpacity="0.22" strokeWidth="0.18" />
      </svg>

      {OUTER_NODES.map((node) => (
        <TechNode key={node.alt} {...node} size={56} />
      ))}
      {INNER_NODES.map((node) => (
        <TechNode key={node.alt} {...node} size={48} />
      ))}
      <TechNode {...CENTER_NODE} size={64} />
    </div>
  );
};
