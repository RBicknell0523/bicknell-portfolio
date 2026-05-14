"use client";
import { signOut, useSession } from "next-auth/react";
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
  const { data: session } = useSession();
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
          ? "border-b border-border bg-background/80 py-3 shadow-sm backdrop-blur-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-[1170px] items-center justify-between px-4 sm:px-8 xl:px-0">
        {/* Logo — hidden when sticky */}
        {!stickyMenu && (
          <Link href="/">
            <div className="relative h-32 w-44 overflow-hidden rounded-md">
              <Image src="/icon.png" alt="Robert Bicknell Development" fill className="object-cover object-center" />
            </div>
          </Link>
        )}

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
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

        {/* Desktop auth */}
        <div className="hidden items-center gap-3 lg:flex">
          {session ? (
            <>
              <span className="text-sm text-foreground">{session.user?.name}</span>
              <Button variant="ghost" size="sm" onClick={() => signOut()}>
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/auth/signin">Sign In</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/auth/signup">Sign Up</Link>
              </Button>
            </>
          )}
        </div>

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
            <Separator className="my-4" />
            <div className="flex flex-col gap-2">
              {session ? (
                <>
                  <p className="px-3 text-sm text-foreground">{session.user?.name}</p>
                  <Button variant="outline" size="sm" onClick={() => signOut()}>
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/auth/signin">Sign In</Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="/auth/signup">Sign Up</Link>
                  </Button>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
