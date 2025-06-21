import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ReportSectionProps {
  id?: string;
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  numbered?: boolean;
  index?: number;
}

export const ReportSection = ({
  id,
  title,
  icon,
  children,
  className,
  numbered = false,
  index,
}: ReportSectionProps) => {
  return (
    <section id={id} className={cn("relative mb-16 scroll-mt-24", className)}>
      {/* Section Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          {numbered && index !== undefined && (
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-neural-500 to-ai-500 text-white font-bold text-lg">
              {index}
            </div>
          )}
          {icon && (
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-neural-500/20 to-ai-500/20 border border-neural-500/30">
              {icon}
            </div>
          )}
          <div className="flex-1">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-neural-400 to-ai-400 bg-clip-text text-transparent">
              {title}
            </h2>
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-neural-500/50 via-ai-500/50 to-cyber-500/50"></div>
      </div>

      {/* Section Content */}
      <div className="space-y-6">{children}</div>
    </section>
  );
};

export const ReportContent = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "prose prose-invert prose-neural max-w-none",
        "prose-headings:text-foreground prose-headings:font-semibold",
        "prose-p:text-muted-foreground prose-p:leading-relaxed",
        "prose-li:text-muted-foreground prose-li:leading-relaxed",
        "prose-strong:text-foreground prose-strong:font-semibold",
        "prose-code:text-ai-400 prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const HighlightBox = ({
  children,
  type = "info",
  className,
}: {
  children: ReactNode;
  type?: "info" | "warning" | "success" | "neural";
  className?: string;
}) => {
  const variants = {
    info: "border-ai-500/30 bg-ai-500/5",
    warning: "border-yellow-500/30 bg-yellow-500/5",
    success: "border-green-500/30 bg-green-500/5",
    neural: "border-neural-500/30 bg-neural-500/5",
  };

  return (
    <div
      className={cn(
        "p-6 rounded-xl border backdrop-blur-sm",
        variants[type],
        className,
      )}
    >
      {children}
    </div>
  );
};
