"use client";

import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard, A11y } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
import Image from "next/image";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { projects } from "./projectsData";

const DESKTOP_BREAKPOINT = 1024;

const Projects = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const cached = { totalScrollable: 0, isDesktop: false };
    let prevProgress = -1;

    const updateCache = () => {
      cached.totalScrollable = wrapper.offsetHeight - window.innerHeight;
      cached.isDesktop = window.innerWidth >= DESKTOP_BREAKPOINT;
    };
    updateCache();

    const ro = new ResizeObserver(updateCache);
    ro.observe(wrapper);
    window.addEventListener("resize", updateCache);

    const handleScroll = () => {
      if (!cached.isDesktop) return;
      const swiper = swiperRef.current;
      if (!swiper) return;

      const scrolled = -wrapper.getBoundingClientRect().top;
      const progress = Math.max(0, Math.min(1, scrolled / cached.totalScrollable));
      if (progress === prevProgress) return;
      prevProgress = progress;
      swiper.setProgress(progress, 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateCache);
      ro.disconnect();
    };
  }, []);

  return (
    <div ref={wrapperRef} className="lg:h-[500vh]">
      <section
        id="projects"
        className="flex flex-col pt-20 pb-12 lg:sticky lg:top-0 lg:min-h-screen lg:justify-center lg:pt-0 lg:pb-0"
      >
        <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <div className="mb-2 h-12 lg:mb-3">
            <GooeyText
              texts={["Projects", "My Work", "What I Build"]}
              morphTime={1}
              cooldownTime={2.5}
              innerClassName="justify-center lg:justify-start"
              className="h-full"
              textClassName="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent"
            />
          </div>

          <div className="mb-4 flex flex-col items-center gap-3 lg:mb-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="w-full glass-card px-4 py-3 text-center lg:text-left md:max-w-[480px]">
              <p className="text-sm text-foreground/75 lg:text-base">
                A selection of things I&apos;ve built. Each one taught me something new.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-200 hover:border-primary hover:text-primary"
                aria-label="Previous project"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-200 hover:border-primary hover:text-primary"
                aria-label="Next project"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <Swiper
            modules={[Pagination, Keyboard, A11y]}
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            slidesPerView={1}
            spaceBetween={16}
            keyboard={{ enabled: true }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 1.3, spaceBetween: 24 },
              1024: { slidesPerView: 1.5, spaceBetween: 24 },
            }}
            style={{ "--swiper-theme-color": "#c4967a" } as React.CSSProperties}
            className="projects-swiper !pb-10"
          >
            {projects.map((project, i) => {
              const viewUrl =
                project.liveUrl !== "#"
                  ? project.liveUrl
                  : project.repoUrl !== "#"
                  ? project.repoUrl
                  : undefined;

              return (
                <SwiperSlide key={i}>
                  <div className="group relative flex flex-col overflow-hidden glass-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_24px_rgba(0,0,0,0.4)] will-change-transform">

                    {/* Hover overlay */}
                    <a
                      href={viewUrl}
                      target={viewUrl ? "_blank" : undefined}
                      rel={viewUrl ? "noopener noreferrer" : undefined}
                      onClick={!viewUrl ? (e) => e.preventDefault() : undefined}
                      aria-label={`View ${project.title}`}
                      className="absolute inset-0 z-10 flex items-center justify-center bg-black/55 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100"
                    >
                      <span className="translate-y-2 rounded-full border-2 border-white px-7 py-2.5 text-sm font-semibold text-white transition-all duration-300 group-hover:translate-y-0">
                        View
                      </span>
                    </a>

                    {/* Image / placeholder */}
                    <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-primary/20 via-orange-500/10 to-yellow-500/15">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 60vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-xs text-muted-foreground/40">Screenshot coming soon</span>
                        </div>
                      )}
                    </div>

                    {/* Card body */}
                    <div className="flex flex-col p-4 sm:p-6">
                      <div className="mb-2 flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                        ))}
                      </div>
                      <h3 className="mb-1 text-lg font-bold text-foreground sm:text-xl">{project.title}</h3>
                      <p className="mb-4 text-sm leading-relaxed text-foreground/75">{project.description}</p>
                      <div className="flex gap-4">
                        {project.liveUrl !== "#" && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-opacity hover:opacity-75"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Live Preview
                          </a>
                        )}
                        {project.repoUrl !== "#" && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                          >
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                              <path d="M12 0.674805C5.625 0.674805 0.375 5.8498 0.375 12.2998C0.375 17.3998 3.7125 21.7498 8.3625 23.3248C8.9625 23.4373 9.15 23.0623 9.15 22.7998C9.15 22.5373 9.15 21.7873 9.1125 20.7748C5.8875 21.5248 5.2125 19.1998 5.2125 19.1998C4.6875 17.8873 3.9 17.5123 3.9 17.5123C2.85 16.7623 3.9375 16.7623 3.9375 16.7623C5.1 16.7998 5.7375 17.9623 5.7375 17.9623C6.75 19.7623 8.475 19.2373 9.1125 18.8998C9.225 18.1498 9.525 17.6248 9.8625 17.3248C7.3125 17.0623 4.575 16.0498 4.575 11.6248C4.575 10.3498 5.0625 9.3373 5.775 8.5498C5.6625 8.2873 5.25 7.0873 5.8875 5.4748C5.8875 5.4748 6.9 5.1748 9.1125 6.6748C10.05 6.4123 11.025 6.2623 12.0375 6.2623C13.05 6.2623 14.0625 6.3748 14.9625 6.6748C17.175 5.2123 18.15 5.4748 18.15 5.4748C18.7875 7.0498 18.4125 8.2873 18.2625 8.5498C19.0125 9.3373 19.4625 10.3873 19.4625 11.6248C19.4625 16.0498 16.725 17.0623 14.175 17.3248C14.5875 17.6998 14.9625 18.4498 14.9625 19.4998C14.9625 21.0748 14.925 22.3123 14.925 22.6873C14.925 22.9873 15.15 23.3248 15.7125 23.2123C20.2875 21.6748 23.625 17.3623 23.625 12.2248C23.5875 5.8498 18.375 0.674805 12 0.674805Z" />
                            </svg>
                            GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Projects;
