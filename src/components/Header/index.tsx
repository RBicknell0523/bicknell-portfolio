"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import menuData from "./menuData";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [stickyMenu, setStickyMenu] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const check = () => setStickyMenu(window.scrollY > 50);
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  return (
    <>
      {/* ── Mobile nav bar (always visible, bg appears on scroll) ── */}
      <div
        className={`fixed inset-x-0 top-0 z-[1000] flex items-center justify-between px-4 py-3 lg:hidden transition-all duration-300 ${
          stickyMenu
            ? "border-b border-border bg-background/80 shadow-sm backdrop-blur-lg"
            : "bg-transparent"
        }`}
      >
        <Link href="/" aria-label="Home">
          <div className="relative h-10 w-10 overflow-hidden rounded-md">
            <Image
              src="/icon.png"
              alt="Robert Bicknell Development"
              fill
              sizes="40px"
              className="object-cover object-center"
            />
          </div>
        </Link>

        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="flex h-9 w-9 items-center justify-center rounded-md text-foreground/80 transition-colors hover:text-primary"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* ── Mobile horizontal dropdown ── */}
      <div
        className="fixed inset-x-0 top-16 z-[999] lg:hidden border-b border-border/30 bg-background/60 backdrop-blur-xl transition-all duration-300"
        style={{
          opacity: mobileOpen ? 1 : 0,
          transform: mobileOpen ? "translateY(0)" : "translateY(-6px)",
          pointerEvents: mobileOpen ? "auto" : "none",
        }}
        aria-hidden={!mobileOpen}
      >
        <nav className="flex flex-wrap items-center justify-center gap-4 py-4 px-6">
          {menuData
            .filter((item) => !item.submenu)
            .map((menuItem) => (
              <a
                key={menuItem.id}
                href={menuItem.path ?? "#"}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-semibold tracking-wide text-foreground/80 transition-colors hover:text-primary"
              >
                {menuItem.title}
              </a>
            ))}
        </nav>
      </div>

      {/* ── Desktop header ── */}
      <header
        className={`fixed inset-x-0 top-0 z-[1000] hidden lg:block transition-all duration-300 ${
          stickyMenu
            ? "border-b border-border bg-background/80 py-7 shadow-sm backdrop-blur-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="relative mx-auto flex max-w-[1170px] items-center justify-between px-4 sm:px-8 xl:px-0">
          {/* Logo — collapses when sticky */}
          <Link
            href="/"
            className={`overflow-hidden transition-all duration-500 ${
              stickyMenu
                ? "pointer-events-none max-h-0 w-0 opacity-0"
                : "max-h-[200px] w-44 opacity-100"
            }`}
          >
            <div className="relative h-32 w-44 overflow-hidden rounded-md">
              <Image
                src="/icon.png"
                alt="Robert Bicknell Development"
                fill
                sizes="176px"
                loading="eager"
                className="object-cover object-center"
              />
            </div>
          </Link>

          {/* Nav — slides to center when sticky */}
          <nav
            className="absolute flex items-center gap-1 transition-all duration-500 will-change-transform"
            style={
              stickyMenu
                ? { left: "50%", transform: "translateX(-50%)" }
                : { left: "100%", transform: "translateX(-100%)" }
            }
          >
            {menuData.map((menuItem) =>
              menuItem.submenu ? (
                <div key={menuItem.id} className="group relative">
                  <button className="flex items-center gap-1 rounded-md border border-border/50 px-3 py-2 text-base font-medium text-foreground transition-all duration-200 hover:border-primary hover:bg-primary/10 hover:text-primary">
                    {menuItem.title}
                    <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="invisible absolute left-0 top-full z-50 mt-1 min-w-[200px] rounded-lg border border-border bg-card p-1 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                    {menuItem.submenu.map((item) => (
                      <a
                        key={item.id}
                        href={item.path || "#"}
                        className="block rounded-md px-3 py-2 text-sm text-foreground/70 transition-colors hover:bg-accent hover:text-foreground"
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={menuItem.id}
                  href={menuItem.path ?? "#"}
                  className="rounded-md border border-border/50 px-3 py-2 text-base font-medium text-foreground transition-all duration-200 hover:border-primary hover:bg-primary/10 hover:text-primary"
                >
                  {menuItem.title}
                </a>
              ),
            )}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
