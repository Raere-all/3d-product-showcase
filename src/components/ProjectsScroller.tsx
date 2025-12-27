import { useEffect, useRef } from "react";
import voiceExpenseTracker from "@/assets/voice-expense-tracker.png";
import cosmicEcho from "@/assets/cosmic-echo.jpg";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI Voice Expense Tracker",
    description: "Voice-activated finance tracking using Google Gemini for natural speech understanding and Murf.ai for voice responses.",
    image: voiceExpenseTracker,
    tags: ["AI Powered", "Voice Activated"],
  },
  {
    id: 2,
    title: "Cosmic Echo",
    description: "Astrophysics solutions at light speed. Explore the cosmos with voice-enabled astronomical queries and real-time data.",
    image: cosmicEcho,
    tags: ["Astrophysics", "Voice UI"],
  },
];

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="flex-shrink-0 w-[320px] md:w-[380px] glass-panel rounded-2xl overflow-hidden group">
    <div className="relative h-40 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />
    </div>
    <div className="p-4">
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tags.map((tag, idx) => (
          <span
            key={idx}
            className={`px-2 py-0.5 text-[10px] font-oxanium uppercase tracking-wider rounded-full ${
              idx === 0
                ? "bg-neon-pink/20 text-neon-pink border border-neon-pink/30"
                : "bg-neon-teal/20 text-neon-teal border border-neon-teal/30"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="font-orbitron text-base font-bold text-foreground mb-2">
        {project.title}
      </h3>
      <p className="font-grotesk text-lavender text-sm leading-relaxed line-clamp-3">
        {project.description}
      </p>
    </div>
  </div>
);

const ProjectsScroller = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const hasCloned = useRef(false);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const scrollerInner = innerRef.current;

    if (!scroller || !scrollerInner || hasCloned.current) return;

    // Check for reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Add animated attribute
    scroller.setAttribute("data-animated", "true");

    // Clone items for infinite scroll - need to clone multiple times for seamless loop
    const scrollerContent = Array.from(scrollerInner.children);
    // Clone 3 times to ensure seamless looping
    for (let i = 0; i < 3; i++) {
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement;
        duplicatedItem.setAttribute("aria-hidden", "true");
        scrollerInner.appendChild(duplicatedItem);
      });
    }
    
    hasCloned.current = true;
  }, []);

  return (
    <section className="w-full py-16 px-6 bg-void overflow-hidden">
      <div className="max-w-6xl mx-auto mb-8">
        <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-center">
          <span className="text-neon-pink drop-shadow-[0_0_10px_rgba(255,0,128,0.8)]">
            Featured
          </span>{" "}
          <span className="text-neon-teal drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]">
            Projects
          </span>
        </h2>
      </div>

      <div
        ref={scrollerRef}
        className="scroller"
        data-speed="slow"
        data-direction="left"
      >
        <div ref={innerRef} className="scroller__inner">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <style>{`
        .scroller {
          max-width: 100%;
        }

        .scroller__inner {
          padding-block: 1rem;
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          justify-content: center;
        }

        .scroller[data-animated="true"] {
          overflow: hidden;
          -webkit-mask: linear-gradient(
            90deg,
            transparent,
            white 5%,
            white 95%,
            transparent
          );
          mask: linear-gradient(90deg, transparent, white 5%, white 95%, transparent);
        }

        .scroller[data-animated="true"] .scroller__inner {
          width: max-content;
          flex-wrap: nowrap;
          animation: scroll var(--_animation-duration, 40s)
            var(--_animation-direction, forwards) linear infinite;
        }

        .scroller[data-direction="right"] {
          --_animation-direction: reverse;
        }

        .scroller[data-direction="left"] {
          --_animation-direction: forwards;
        }

        .scroller[data-speed="fast"] {
          --_animation-duration: 15s;
        }

        .scroller[data-speed="slow"] {
          --_animation-duration: 30s;
        }

        @keyframes scroll {
          to {
            transform: translate(calc(-25% - 0.375rem));
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectsScroller;
