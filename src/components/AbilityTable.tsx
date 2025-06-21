import { cn } from "@/lib/utils";

interface AbilityTableData {
  tier: string;
  component: string;
  abilities: string;
}

const abilityData: AbilityTableData[] = [
  {
    tier: "Interface",
    component: "Rinnegan, Susano",
    abilities: "User I/O, summary, web deployment",
  },
  {
    tier: "Cordinal AI",
    component: "Strategic Control",
    abilities: "Eternal Mangekyo, Infinite Tsukuyomi, Izanagi/Izanami",
  },
  {
    tier: "Supervisors",
    component: "Task Routing, Recovery",
    abilities: "Mangekyo Sharingan, Tsukuyomi, Izanami, Shinra Tensei",
  },
  {
    tier: "Task AIs",
    component: "Execution",
    abilities: "Sharingan, environmental feedback",
  },
  {
    tier: "Feedback Units",
    component: "Post-processing",
    abilities: "Izanagi/Izanami, Shinra Tensei, Pull",
  },
];

export const AbilityTable = () => {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-border/50 backdrop-blur-sm glass-effect">
      {/* Table Header */}
      <div className="bg-gradient-to-r from-neural-500/20 to-ai-500/20 border-b border-border/50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          <div className="font-semibold text-neural-400">Tier</div>
          <div className="font-semibold text-neural-400">Component</div>
          <div className="font-semibold text-neural-400">
            Assigned Abilities
          </div>
        </div>
      </div>

      {/* Table Body */}
      <div className="divide-y divide-border/30">
        {abilityData.map((row, index) => (
          <div
            key={index}
            className={cn(
              "grid grid-cols-1 md:grid-cols-3 gap-4 p-4",
              "hover:bg-muted/30 transition-colors duration-200",
              "group",
            )}
          >
            <div className="flex items-center">
              <span
                className={cn(
                  "px-3 py-1 rounded-lg text-sm font-medium",
                  "bg-gradient-to-r from-neural-500/20 to-ai-500/20",
                  "border border-neural-500/30 text-neural-300",
                )}
              >
                {row.tier}
              </span>
            </div>

            <div className="text-foreground font-medium">{row.component}</div>

            <div className="text-muted-foreground">
              <div className="flex flex-wrap gap-2">
                {row.abilities.split(", ").map((ability, idx) => (
                  <span
                    key={idx}
                    className={cn(
                      "text-xs px-2 py-1 rounded",
                      "bg-ai-500/10 text-ai-300 border border-ai-500/20",
                      "group-hover:bg-ai-500/20 transition-colors duration-200",
                    )}
                  >
                    {ability}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
