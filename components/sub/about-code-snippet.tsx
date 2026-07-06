import { DEVELOPER_SNIPPET } from "@/constants";

const LINE_NUMBERS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

export const AboutCodeSnippet = () => {
  const { name, role, stack, focus, learning } = DEVELOPER_SNIPPET;

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0c1a]/90 shadow-xl backdrop-blur-sm">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <span className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-2 font-mono text-xs text-gray-500">developer.ts</span>
      </div>

      <div className="flex overflow-x-auto p-4 font-mono text-sm leading-relaxed">
        <div className="mr-4 select-none text-right text-gray-600">
          {LINE_NUMBERS.map((num) => (
            <div key={num}>{num}</div>
          ))}
        </div>

        <pre className="text-gray-300">
          <code>
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">developer</span> = {"{"}
            {"\n"}
            {"  "}
            <span className="text-cyan-300">name</span>:{" "}
            <span className="text-green-400">&apos;{name}&apos;</span>,{"\n"}
            {"  "}
            <span className="text-cyan-300">role</span>:{" "}
            <span className="text-green-400">&apos;{role}&apos;</span>,{"\n"}
            {"  "}
            <span className="text-cyan-300">stack</span>: [{"\n"}
            {stack.map((item, index) => (
              <span key={item}>
                {"    "}
                <span className="text-green-400">&apos;{item}&apos;</span>
                {index < stack.length - 1 ? "," : ""}
                {"\n"}
              </span>
            ))}
            {"  "}],{"\n"}
            {"  "}
            <span className="text-cyan-300">focus</span>:{" "}
            <span className="text-green-400">&apos;{focus}&apos;</span>,{"\n"}
            {"  "}
            <span className="text-cyan-300">learning</span>:{" "}
            <span className="text-orange-400">{String(learning)}</span>,{"\n"}
            {"};"}
          </code>
        </pre>
      </div>
    </div>
  );
};
