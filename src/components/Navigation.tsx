import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const navItems = [
  { id: "objective", label: "Objective" },
  { id: "principles", label: "Core Principles" },
  { id: "hierarchy", label: "Hierarchical Structure" },
  { id: "flow", label: "Interrupt Management" },
  { id: "abilities", label: "AI Abilities" },
  { id: "innovations", label: "Key Innovations" },
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("objective");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden xl:block">
      <div className="glass-effect rounded-xl p-2 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={cn(
              "w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
              "hover:bg-neural-500/20 hover:text-neural-300",
              activeSection === item.id
                ? "bg-gradient-to-r from-neural-500/30 to-ai-500/30 text-neural-300 border border-neural-500/40"
                : "text-muted-foreground",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <div className="xl:hidden fixed top-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "p-3 rounded-xl glass-effect",
          "hover:bg-neural-500/20 transition-colors duration-200",
        )}
      >
        <svg
          className="w-6 h-6 text-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-16 right-0 glass-effect rounded-xl p-2 min-w-48 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:bg-neural-500/20 hover:text-neural-300 transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
