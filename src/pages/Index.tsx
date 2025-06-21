import {
  ReportSection,
  ReportContent,
  HighlightBox,
} from "@/components/ReportSection";
import { HierarchyChart } from "@/components/HierarchyChart";
import { AbilityTable } from "@/components/AbilityTable";
import { Navigation, MobileNavigation } from "@/components/Navigation";
import { Brain, Eye, Network, Zap, Shield, Cpu } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background tech-grid relative">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-neural-900/20 via-background to-ai-900/20 pointer-events-none" />
      <div className="fixed inset-0 neural-gradient opacity-5 pointer-events-none" />

      {/* Navigation */}
      <Navigation />
      <MobileNavigation />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <header className="relative overflow-hidden">
          <div className="container mx-auto px-6 pt-20 pb-16">
            <div className="text-center max-w-4xl mx-auto">
              {/* Logo/Icon */}
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-neural-500 to-ai-500 flex items-center justify-center animate-pulse-glow">
                    <Eye className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-neural-500/20 to-ai-500/20 blur-xl"></div>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-neural-400 via-ai-400 to-cyber-400 bg-clip-text text-transparent">
                  EYE of Reason
                </span>
              </h1>

              <div className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
                Interrupt-Based Hierarchical AI Model
              </div>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                A comprehensive framework for scalable, interrupt-aware, modular
                AI that decomposes complex problems and evolves toward
                Artificial General Intelligence.
              </p>

              {/* Scroll Indicator */}
              <div className="mt-16 flex justify-center">
                <div className="animate-bounce">
                  <div className="w-6 h-10 border-2 border-neural-400 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-neural-400 rounded-full mt-2 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Report Content */}
        <main className="container mx-auto px-6 pb-20">
          {/* Objective Section */}
          <ReportSection
            id="objective"
            title="Objective"
            icon={<Brain className="w-6 h-6 text-neural-400" />}
            numbered
            index={1}
          >
            <ReportContent>
              <p>
                To design a scalable, interrupt-aware, modular AI framework that
                achieves the following goals:
              </p>
            </ReportContent>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <HighlightBox type="neural">
                <h4 className="font-semibold text-neural-300 mb-3">
                  Problem Decomposition
                </h4>
                <p className="text-sm text-muted-foreground">
                  Decomposes complex problems into manageable subtasks through
                  intelligent hierarchical analysis.
                </p>
              </HighlightBox>

              <HighlightBox type="info">
                <h4 className="font-semibold text-ai-300 mb-3">
                  Automated Execution
                </h4>
                <p className="text-sm text-muted-foreground">
                  Automates execution via intelligent agents with specialized
                  roles and capabilities.
                </p>
              </HighlightBox>

              <HighlightBox type="success">
                <h4 className="font-semibold text-green-300 mb-3">
                  Adaptive Control
                </h4>
                <p className="text-sm text-muted-foreground">
                  Incorporates feedback, validation, and adaptive control
                  mechanisms for continuous improvement.
                </p>
              </HighlightBox>

              <HighlightBox type="warning">
                <h4 className="font-semibold text-yellow-300 mb-3">
                  AGI Convergence
                </h4>
                <p className="text-sm text-muted-foreground">
                  Evolves through learning and escalates unresolved issues,
                  simulating convergence toward AGI.
                </p>
              </HighlightBox>
            </div>
          </ReportSection>

          {/* Core Principles Section */}
          <ReportSection
            id="principles"
            title="Core Principles"
            icon={<Shield className="w-6 h-6 text-ai-400" />}
            numbered
            index={2}
          >
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="p-6 rounded-xl bg-gradient-to-br from-neural-500/10 to-transparent border border-neural-500/20">
                    <h4 className="font-semibold text-neural-300 mb-3 flex items-center gap-2">
                      <Network className="w-5 h-5" />
                      Divide, Conquer, Combine
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Tasks are recursively decomposed, independently executed,
                      then intelligently integrated to solve complex problems
                      through systematic breakdown.
                    </p>
                  </div>

                  <div className="p-6 rounded-xl bg-gradient-to-br from-ai-500/10 to-transparent border border-ai-500/20">
                    <h4 className="font-semibold text-ai-300 mb-3 flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      Interrupt Responsiveness
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Handles execution anomalies through intelligent escalation
                      and pruning mechanisms that maintain system stability and
                      efficiency.
                    </p>
                  </div>

                  <div className="p-6 rounded-xl bg-gradient-to-br from-cyber-500/10 to-transparent border border-cyber-500/20">
                    <h4 className="font-semibold text-cyber-300 mb-3 flex items-center gap-2">
                      <Cpu className="w-5 h-5" />
                      Layered Intelligence
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Specialized abilities are distributed across a hierarchy
                      of AI agents, each optimized for specific cognitive
                      functions.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20">
                    <h4 className="font-semibold text-green-300 mb-3">
                      Feedback Loop
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Continuous environmental sensing and knowledge acquisition
                      enable adaptive learning and performance optimization.
                    </p>
                  </div>

                  <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20">
                    <h4 className="font-semibold text-purple-300 mb-3">
                      Transparency & Traceability
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Generative reporting and validation checkpoints maintain
                      complete oversight and auditability of all system
                      operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ReportSection>

          {/* Hierarchical Structure Section */}
          <ReportSection
            id="hierarchy"
            title="Hierarchical Structure & Roles"
            icon={<Network className="w-6 h-6 text-cyber-400" />}
            numbered
            index={3}
          >
            <ReportContent>
              <p className="mb-8">
                The EYE of Reason framework operates through a sophisticated
                multi-tier architecture where each level has specialized
                responsibilities and capabilities:
              </p>
            </ReportContent>

            <HierarchyChart />
          </ReportSection>

          {/* Interrupt Management Flow Section */}
          <ReportSection
            id="flow"
            title="Interrupt Management Flow"
            icon={<Zap className="w-6 h-6 text-yellow-400" />}
            numbered
            index={4}
          >
            <div className="space-y-8">
              <ReportContent>
                <p>
                  The system follows a sophisticated workflow that handles
                  interrupts and maintains operational integrity through
                  structured escalation and validation processes:
                </p>
              </ReportContent>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {[
                  {
                    step: "1",
                    title: "Task Initiation",
                    description: "User request enters via Rinnegan interface",
                    color: "from-purple-500 to-purple-600",
                  },
                  {
                    step: "2",
                    title: "Decomposition",
                    description:
                      "Cordinal AI (Eternal Mangekyo) breaks problems into subtasks",
                    color: "from-blue-500 to-blue-600",
                  },
                  {
                    step: "3",
                    title: "Delegation",
                    description:
                      "Tasks pass down to Supervisor AIs and further to Task AIs",
                    color: "from-green-500 to-green-600",
                  },
                  {
                    step: "4",
                    title: "Execution",
                    description:
                      "Task-Based AIs perform operations and report status",
                    color: "from-yellow-500 to-yellow-600",
                  },
                  {
                    step: "5",
                    title: "Interrupt Detection",
                    description:
                      "Success flows upward, failures escalate to supervisors",
                    color: "from-red-500 to-red-600",
                  },
                  {
                    step: "6",
                    title: "Validation & Application",
                    description:
                      "Izanagi checks correctness, Shinra Tensei applies solutions",
                    color: "from-cyan-500 to-cyan-600",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl glass-effect border border-border/50 hover:border-neural-500/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-sm`}
                      >
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ReportSection>

          {/* AI Abilities Overview Section */}
          <ReportSection
            id="abilities"
            title="AI Ability Overview by Tier"
            icon={<Cpu className="w-6 h-6 text-green-400" />}
            numbered
            index={5}
          >
            <ReportContent>
              <p className="mb-8">
                Each tier in the hierarchy possesses specific abilities that
                enable specialized cognitive functions and operational
                capabilities:
              </p>
            </ReportContent>

            <AbilityTable />
          </ReportSection>

          {/* Key Innovations Section */}
          <ReportSection
            id="innovations"
            title="Key Innovations"
            icon={<Brain className="w-6 h-6 text-purple-400" />}
            numbered
            index={6}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                {
                  title: "Myth-Inspired Intelligence Mapping",
                  description:
                    "Improves conceptual clarity and engagement through intuitive naming conventions that enhance system comprehension and user interaction.",
                  icon: "🧠",
                  color: "neural",
                },
                {
                  title: "Interrupt Propagation Tree",
                  description:
                    "Ensures fail-safes and maintains workflow resilience through sophisticated error handling and escalation mechanisms.",
                  icon: "🌲",
                  color: "ai",
                },
                {
                  title: "Adaptive Automation",
                  description:
                    "Infinite Tsukuyomi creates a feedback-aware, self-adjusting process loop that continuously optimizes performance.",
                  icon: "🔄",
                  color: "cyber",
                },
                {
                  title: "Built-in Auditing",
                  description:
                    "Generative modes and validator tiers allow for transparent system logs and comprehensive oversight capabilities.",
                  icon: "📊",
                  color: "neural",
                },
                {
                  title: "Knowledge-Infused Feedback Loop",
                  description:
                    "Pull mechanism ensures continuous refinement of performance through environmental learning and adaptation.",
                  icon: "🧬",
                  color: "ai",
                },
                {
                  title: "Hierarchical Problem Solving",
                  description:
                    "Multi-tier architecture enables scalable problem decomposition and specialized agent coordination.",
                  icon: "🏗️",
                  color: "cyber",
                },
              ].map((innovation, index) => (
                <HighlightBox
                  key={index}
                  type={innovation.color as any}
                  className="h-full"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{innovation.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-3">
                        {innovation.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {innovation.description}
                      </p>
                    </div>
                  </div>
                </HighlightBox>
              ))}
            </div>
          </ReportSection>

          {/* Conclusion */}
          <section className="mt-20 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="p-8 rounded-2xl glass-effect border border-neural-500/30 bg-gradient-to-br from-neural-500/5 to-ai-500/5">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-neural-400 to-ai-400 bg-clip-text text-transparent mb-4">
                  The Future of Artificial Intelligence
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  The EYE of Reason framework represents a paradigm shift toward
                  truly intelligent, adaptive AI systems that can handle
                  complex, real-world challenges through hierarchical
                  problem-solving and continuous learning. By combining
                  interrupt-based processing with specialized agent roles, this
                  model paves the way for the next generation of artificial
                  general intelligence.
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="container mx-auto px-6 py-8 border-t border-border/30 mt-20">
          <div className="text-center text-muted-foreground">
            <p className="text-sm">
              EYE of Reason — Interrupt-Based Hierarchical AI Model
            </p>
            <p className="text-xs mt-2 opacity-70">
              Comprehensive Report & Technical Specification
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
