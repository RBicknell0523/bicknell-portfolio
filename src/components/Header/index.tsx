"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Header = () => {
  const [stickyMenu, setStickyMenu] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);
  const pathUrl = usePathname();

  useEffect(() => {
    const handleScroll = () => setStickyMenu(window.scrollY >= 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-1000 w-full transition-all duration-200 ${
        stickyMenu
          ? "border-b border-border bg-background/80 py-1.5 shadow-sm backdrop-blur-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="relative mx-auto flex max-w-[1170px] items-center justify-between px-4 sm:px-8 xl:px-0">
        {/* Logo — fades out when sticky */}
        <Link
          href="/"
          className={`transition-all duration-300 ${stickyMenu ? "pointer-events-none opacity-0" : "opacity-100"}`}
        >
          <div className="relative h-32 w-44 overflow-hidden rounded-md">
            <Image src="/icon.png" alt="Robert Bicknell Development" fill className="object-cover object-center" />
          </div>
        </Link>

        {/* Desktop nav — right by default, slides to centre on scroll */}
        <nav
          className="absolute hidden items-center gap-1 transition-all duration-300 lg:flex"
          style={
            stickyMenu
              ? { left: "50%", transform: "translateX(-50%)" }
              : { left: "100%", transform: "translateX(-100%)" }
          }
        >
          {menuData.map((menuItem) =>
            menuItem.submenu ? (
              <div key={menuItem.id} className="group relative">
                <button
                  className={`flex items-center gap-1 rounded-md px-3 py-2 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                    pathUrl === menuItem.path
                      ? "text-primary"
                      : "text-foreground/70"
                  }`}
                >
                  {menuItem.title}
                  <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
                </button>
                <div className="invisible absolute left-0 top-full z-50 mt-1 min-w-[200px] rounded-lg border border-border bg-card p-1 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                  {menuItem.submenu.map((item) => (
                    <Link
                      key={item.id}
                      href={item.path || "#"}
                      className="block rounded-md px-3 py-2 text-sm text-foreground/70 transition-colors hover:bg-accent hover:text-foreground"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={menuItem.id}
                href={menuItem.path ?? "#"}
                className={`rounded-md px-3 py-2 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                  pathUrl === menuItem.path
                    ? "text-primary"
                    : "text-foreground/70"
                }`}
              >
                {menuItem.title}
              </Link>
            ),
          )}
        </nav>


        {/* Mobile nav */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="flex w-[min(288px,85vw)] flex-col bg-background">
            <SheetTitle className="sr-only">Navigation menu</SheetTitle>
            <div className="mb-4 pt-2">
              <div className="relative h-16 w-24 overflow-hidden rounded-md">
                <Image src="/icon.png" alt="Robert Bicknell Development" fill className="object-cover object-center" />
              </div>
            </div>
            <Separator className="mb-4" />
            <nav className="flex flex-col gap-1">
              {menuData.map((menuItem) =>
                menuItem.submenu ? (
                  <div key={menuItem.id}>
                    <button
                      onClick={() =>
                        setOpenSubmenu(
                          openSubmenu === menuItem.id ? null : menuItem.id,
                        )
                      }
                      className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-foreground/70 hover:bg-accent"
                    >
                      {menuItem.title}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${openSubmenu === menuItem.id ? "rotate-180" : ""}`}
                      />
                    </button>
                    {openSubmenu === menuItem.id && (
                      <div className="ml-3 mt-1 flex flex-col gap-1 border-l border-border pl-3">
                        {menuItem.submenu.map((item) => (
                          <Link
                            key={item.id}
                            href={item.path || "#"}
                            className="rounded-md px-3 py-1.5 text-sm text-foreground/60 hover:bg-accent hover:text-foreground"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={menuItem.id}
                    href={menuItem.path ?? "#"}
                    className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent ${
                      pathUrl === menuItem.path
                        ? "text-primary"
                        : "text-foreground/70"
                    }`}
                  >
                    {menuItem.title}
                  </Link>
                ),
              )}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
