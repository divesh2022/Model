import { cn } from "@/lib/utils";

interface HierarchyNode {
  id: string;
  name: string;
  role: string;
  abilities: string[];
  tier: "root" | "interface" | "strategic" | "tactical" | "execution" | "post";
  icon: string;
}

const hierarchyData: HierarchyNode[] = [
  {
    id: "root",
    name: "Root & Admin",
    role: "Central Governance",
    abilities: ["Access Control", "Policy Enforcement"],
    tier: "root",
    icon: "🧠",
  },
  {
    id: "rinnegan",
    name: "Rinnegan",
    role: "User Interface",
    abilities: ["User Input", "Summary Compilation", "Result Display"],
    tier: "interface",
    icon: "👁️",
  },
  {
    id: "susano",
    name: "Susano",
    role: "Web Interface",
    abilities: ["Human Interaction", "System Visualization"],
    tier: "interface",
    icon: "🌐",
  },
  {
    id: "cordinal",
    name: "Cordinal AI",
    role: "Strategic Control",
    abilities: ["Eternal Mangekyo", "Infinite Tsukuyomi", "Izanagi/Izanami"],
    tier: "strategic",
    icon: "🧬",
  },
  {
    id: "supervisor-l1",
    name: "Level 1 Supervisors",
    role: "Task Distribution",
    abilities: ["Mangekyo Sharingan", "Tsukuyomi", "Shinra Tensei", "Izanami"],
    tier: "tactical",
    icon: "🧭",
  },
  {
    id: "supervisor-l2",
    name: "Level 2 Supervisors",
    role: "Execution Monitoring",
    abilities: ["Mangekyo Sharingan", "Tsukuyomi", "Izanami"],
    tier: "tactical",
    icon: "🎯",
  },
  {
    id: "task-ai",
    name: "Task-Based AIs",
    role: "Direct Execution",
    abilities: ["Sharingan", "Environmental Feedback"],
    tier: "execution",
    icon: "⚙️",
  },
  {
    id: "validation",
    name: "Validation Units",
    role: "Quality Assurance",
    abilities: ["Izanagi/Izanami", "Shinra Tensei", "Pull"],
    tier: "post",
    icon: "🔄",
  },
];

const tierColors = {
  root: "from-red-500 to-red-600",
  interface: "from-purple-500 to-purple-600",
  strategic: "from-blue-500 to-blue-600",
  tactical: "from-green-500 to-green-600",
  execution: "from-yellow-500 to-yellow-600",
  post: "from-cyan-500 to-cyan-600",
};

const tierLabels = {
  root: "Root & Admin",
  interface: "Interface Layer",
  strategic: "Strategic Tier",
  tactical: "Tactical Tier",
  execution: "Execution Tier",
  post: "Post-Execution",
};

export const HierarchyChart = () => {
  const groupedData = hierarchyData.reduce(
    (acc, node) => {
      if (!acc[node.tier]) acc[node.tier] = [];
      acc[node.tier].push(node);
      return acc;
    },
    {} as Record<string, HierarchyNode[]>,
  );

  return (
    <div className="w-full">
      <div className="space-y-8">
        {Object.entries(groupedData).map(([tier, nodes]) => (
          <div key={tier} className="relative">
            {/* Tier Label */}
            <div className="mb-4">
              <h3
                className={cn(
                  "text-lg font-semibold px-4 py-2 rounded-lg inline-block",
                  "bg-gradient-to-r text-white",
                  tierColors[tier as keyof typeof tierColors],
                )}
              >
                {tierLabels[tier as keyof typeof tierLabels]}
              </h3>
            </div>

            {/* Nodes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {nodes.map((node) => (
                <div
                  key={node.id}
                  className={cn(
                    "p-4 rounded-xl border backdrop-blur-sm glass-effect",
                    "hover:scale-105 transition-all duration-300",
                    "group cursor-pointer",
                  )}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className={cn(
                        "text-2xl p-2 rounded-lg bg-gradient-to-br",
                        tierColors[tier as keyof typeof tierColors],
                        "group-hover:scale-110 transition-transform duration-300",
                      )}
                    >
                      {node.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground text-sm">
                        {node.name}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        {node.role}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs font-medium text-ai-400">
                      Abilities:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {node.abilities.map((ability, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground"
                        >
                          {ability}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Connection Lines */}
            {tier !== "post" && (
              <div className="flex justify-center mb-4">
                <div className="w-px h-8 bg-gradient-to-b from-muted to-transparent"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
