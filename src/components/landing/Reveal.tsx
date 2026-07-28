import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

function useInView<T extends HTMLElement>(threshold = 0.12) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -6% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] will-change-transform",
        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function SectionLabel({
  index,
  text,
  onPaper = false,
}: {
  index: string;
  text: string;
  onPaper?: boolean;
}) {
  return (
    <div
      className={cn(
        "mb-7 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.26em]",
        onPaper ? "text-primary-ink" : "text-primary"
      )}
    >
      <span
        aria-hidden="true"
        className={cn("h-px w-9", onPaper ? "bg-primary-ink/50" : "bg-primary/50")}
      />
      <span>
        {index} — {text}
      </span>
    </div>
  );
}
