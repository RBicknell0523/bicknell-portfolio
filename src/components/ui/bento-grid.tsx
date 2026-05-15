"use client";

import { cn } from "@/lib/utils";

export interface BentoItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  status?: string;
  tags?: string[];
  meta?: string;
  cta?: string;
  colSpan?: number;
  hasPersistentHover?: boolean;
  href?: string;
  bullets?: string[];
}

interface BentoGridProps {
  items: BentoItem[];
  className?: string;
}

function BentoGrid({ items, className }: BentoGridProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-3 max-w-7xl mx-auto", className)}>
      {items.map((item, index) => {
        const inner = (
          <div
            className={cn(
              "group relative p-6 rounded-xl overflow-hidden transition-all duration-300",
              "border border-border/60 bg-card/80 backdrop-blur-sm",
              "hover:shadow-[0_4px_24px_rgba(0,0,0,0.3)]",
              "hover:-translate-y-0.5 will-change-transform",
              item.hasPersistentHover && "shadow-[0_4px_24px_rgba(0,0,0,0.3)] -translate-y-0.5",
              item.href && "cursor-pointer",
            )}
          >
            {/* Dot pattern overlay */}
            <div
              className={cn(
                "absolute inset-0 transition-opacity duration-300",
                item.hasPersistentHover ? "opacity-100" : "opacity-0 group-hover:opacity-100",
              )}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:4px_4px]" />
            </div>

            <div className="relative flex flex-col space-y-3">
              {/* Icon + status row */}
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-black/5 dark:bg-white/10 group-hover:bg-primary/15 transition-all duration-300">
                  {item.icon}
                </div>
                <span
                  className={cn(
                    "text-xs font-medium px-2 py-1 rounded-lg backdrop-blur-sm",
                    "bg-black/5 dark:bg-white/10 text-foreground/80",
                    "transition-colors duration-300 group-hover:bg-black/10 dark:group-hover:bg-white/20",
                  )}
                >
                  {item.status || "Active"}
                </span>
              </div>

              {/* Title + description */}
              <div className="space-y-2">
                <h3 className="font-medium text-foreground tracking-tight text-[15px]">
                  {item.title}
                  <span className="ml-2 text-xs text-foreground/60 font-normal">
                    {item.meta}
                  </span>
                </h3>
                <p className="text-sm text-foreground/75 leading-snug font-[425]">
                  {item.description}
                </p>
                {item.bullets && item.bullets.length > 0 && (
                  <ul className="mt-2 space-y-1.5">
                    {item.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground/75">
                        <span className="mt-[6px] h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Tags + CTA */}
              <div className="flex items-center justify-between mt-2">
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-foreground/60">
                  {item.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded-md bg-black/5 dark:bg-white/10 backdrop-blur-sm transition-all duration-200 hover:bg-black/10 dark:hover:bg-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {item.cta && (
                  <span className="text-xs text-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {item.cta}
                  </span>
                )}
              </div>
            </div>

            {/* Gradient border overlay */}
            <div
              className={cn(
                "absolute inset-0 -z-10 rounded-xl p-px bg-gradient-to-br from-transparent via-gray-100/50 to-transparent dark:via-white/10 transition-opacity duration-300",
                item.hasPersistentHover ? "opacity-100" : "opacity-0 group-hover:opacity-100",
              )}
            />
          </div>
        );

        return item.href ? (
          <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className={item.colSpan === 2 ? "md:col-span-2" : "col-span-1"}>
            {inner}
          </a>
        ) : (
          <div key={index} className={item.colSpan === 2 ? "md:col-span-2" : "col-span-1"}>
            {inner}
          </div>
        );
      })}
    </div>
  );
}

export { BentoGrid };
