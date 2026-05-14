# Portfolio Sections Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the SaaS home page with a web developer portfolio consisting of Hero, About, Projects, and Contact sections, with simplified header nav and footer.

**Architecture:** New portfolio components live under `src/components/Portfolio/`. The home page renders only the four portfolio sections. All existing SaaS section components are left untouched — only removed from the page render. Header and footer are updated in place.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS v4, shadcn/ui (Avatar, Badge, Card, Button, Input, Textarea, Label, Separator — all already installed)

---

## Task 1: Update header nav

**Files:**
- Modify: `src/components/Header/menuData.ts`

- [ ] **Replace all menu entries with three anchor links**

```ts
import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  { id: 1, title: "About",    newTab: false, path: "#about"    },
  { id: 2, title: "Projects", newTab: false, path: "#projects" },
  { id: 3, title: "Contact",  newTab: false, path: "#contact"  },
];

export default menuData;
```

- [ ] **Commit**

```bash
git add src/components/Header/menuData.ts
git commit -m "feat: simplify header nav to portfolio anchor links"
```

---

## Task 2: Update Hero section

**Files:**
- Modify: `src/components/Home/Hero/index.tsx`

- [ ] **Replace the full component with portfolio copy and anchor CTA buttons**

```tsx
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative z-10 flex min-h-[calc(100vh-80px)] flex-col items-center justify-center overflow-hidden bg-background px-4 pt-32 text-center sm:px-8 xl:px-0"
    >
      <div className="mx-auto max-w-[760px]">
        <Badge variant="secondary" className="mb-5 text-primary">
          Available for hire
        </Badge>

        <h1 className="mb-6 text-4xl font-extrabold leading-tight text-foreground sm:text-5xl xl:text-6xl">
          Hi, I'm{" "}
          <span className="text-primary">Your Name</span>
          <br />
          Full Stack Developer
        </h1>

        <p className="mx-auto mb-10 max-w-[520px] text-base text-muted-foreground md:text-lg">
          I build fast, accessible, and beautiful web applications. Focused on
          React, Next.js, and Node.js — always learning something new.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="#projects">View Projects</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
```

- [ ] **Commit**

```bash
git add src/components/Home/Hero/index.tsx
git commit -m "feat: update hero to portfolio layout"
```

---

## Task 3: Create project data file

**Files:**
- Create: `src/components/Portfolio/Projects/projectsData.ts`

- [ ] **Create the data file with type definition and three placeholder projects**

```ts
export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with Next.js 14, Tailwind CSS, and shadcn/ui. Features a dark Mocha Mousse theme, smooth anchor navigation, and a contact form.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
  },
  {
    title: "Project Two",
    description:
      "A full-stack application with user authentication, a REST API, and a responsive dashboard. Replace this with a real project description.",
    tags: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    repoUrl: "#",
    featured: false,
  },
  {
    title: "Project Three",
    description:
      "A mobile-first web app with real-time features. Replace this with a real project description.",
    tags: ["Next.js", "Prisma", "WebSockets"],
    liveUrl: "#",
    repoUrl: "#",
    featured: false,
  },
];
```

- [ ] **Commit**

```bash
git add src/components/Portfolio/Projects/projectsData.ts
git commit -m "feat: add portfolio project data"
```

---

## Task 4: Create Projects section component

**Files:**
- Create: `src/components/Portfolio/Projects/index.tsx`

- [ ] **Create the Projects component with featured card and grid**

```tsx
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "./projectsData";

const Projects = () => {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      data-animate
      className="mx-auto max-w-[1170px] px-4 py-24 sm:px-8 xl:px-0"
    >
      <h2 className="mb-3 text-3xl font-extrabold text-foreground sm:text-4xl">
        Projects
      </h2>
      <p className="mb-12 max-w-[480px] text-muted-foreground">
        A selection of things I've built. Each one taught me something new.
      </p>

      {/* Featured project */}
      {featured && (
        <Card data-animate className="mb-8 overflow-hidden">
          <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
            <div className="flex flex-col justify-between p-8">
              <div>
                <CardHeader className="p-0 pb-4">
                  <CardTitle className="text-2xl">{featured.title}</CardTitle>
                  <CardDescription className="mt-2 text-base leading-relaxed">
                    {featured.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="flex flex-wrap gap-2">
                    {featured.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </div>
              <CardFooter className="mt-6 gap-3 p-0">
                <Button asChild>
                  <Link href={featured.liveUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href={featured.repoUrl} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </Link>
                </Button>
              </CardFooter>
            </div>
            {/* Image / animation slot */}
            <div className="flex items-center justify-center bg-muted p-8 lg:p-0">
              <div className="aspect-video w-full rounded-md bg-card" />
            </div>
          </div>
        </Card>
      )}

      {/* Grid projects */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {rest.map((project) => (
          <Card key={project.title} data-animate className="flex flex-col overflow-hidden">
            {/* Image / animation slot */}
            <div className="aspect-video w-full bg-muted" />
            <div className="flex flex-1 flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </CardContent>
              <CardFooter className="mt-auto gap-3">
                <Button size="sm" asChild>
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </Link>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </Link>
                </Button>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
```

- [ ] **Commit**

```bash
git add src/components/Portfolio/Projects/index.tsx
git commit -m "feat: add Projects section component"
```

---

## Task 5: Create About section component

**Files:**
- Create: `src/components/Portfolio/About/index.tsx`

- [ ] **Create the About component with avatar, bio, and tech stack badges**

```tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const skills = [
  "TypeScript", "React", "Next.js", "Node.js",
  "Tailwind CSS", "PostgreSQL", "Prisma", "Git",
];

const About = () => {
  return (
    <section
      id="about"
      data-animate
      className="bg-card"
    >
      <div className="mx-auto max-w-[1170px] px-4 py-24 sm:px-8 xl:px-0">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[auto_1fr]">

          {/* Left: avatar + social links */}
          <div className="flex flex-col items-center gap-5 lg:items-start">
            <Avatar className="h-36 w-36 border-2 border-border">
              <AvatarImage src="/images/about/avatar.jpg" alt="Your Name" />
              <AvatarFallback className="text-3xl font-bold text-primary">YN</AvatarFallback>
            </Avatar>

            <div className="flex gap-3">
              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0.674805C5.625 0.674805 0.375 5.8498 0.375 12.2998C0.375 17.3998 3.7125 21.7498 8.3625 23.3248C8.9625 23.4373 9.15 23.0623 9.15 22.7998C9.15 22.5373 9.15 21.7873 9.1125 20.7748C5.8875 21.5248 5.2125 19.1998 5.2125 19.1998C4.6875 17.8873 3.9 17.5123 3.9 17.5123C2.85 16.7623 3.9375 16.7623 3.9375 16.7623C5.1 16.7998 5.7375 17.9623 5.7375 17.9623C6.75 19.7623 8.475 19.2373 9.1125 18.8998C9.225 18.1498 9.525 17.6248 9.8625 17.3248C7.3125 17.0623 4.575 16.0498 4.575 11.6248C4.575 10.3498 5.0625 9.3373 5.775 8.5498C5.6625 8.2873 5.25 7.0873 5.8875 5.4748C5.8875 5.4748 6.9 5.1748 9.1125 6.6748C10.05 6.4123 11.025 6.2623 12.0375 6.2623C13.05 6.2623 14.0625 6.3748 14.9625 6.6748C17.175 5.2123 18.15 5.4748 18.15 5.4748C18.7875 7.0498 18.4125 8.2873 18.2625 8.5498C19.0125 9.3373 19.4625 10.3873 19.4625 11.6248C19.4625 16.0498 16.725 17.0623 14.175 17.3248C14.5875 17.6998 14.9625 18.4498 14.9625 19.4998C14.9625 21.0748 14.925 22.3123 14.925 22.6873C14.925 22.9873 15.15 23.3248 15.7125 23.2123C20.2875 21.6748 23.625 17.3623 23.625 12.2248C23.5875 5.8498 18.375 0.674805 12 0.674805Z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.258 5.635 5.906-5.635zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: bio + tech stack */}
          <div>
            <h2 className="mb-4 text-3xl font-extrabold text-foreground sm:text-4xl">
              About Me
            </h2>
            <p className="mb-6 max-w-[600px] leading-relaxed text-muted-foreground">
              I'm a full stack developer with a passion for building clean,
              performant web experiences. I enjoy working across the entire
              stack — from designing systems to shipping pixel-perfect UIs.
              When I'm not coding, you'll find me exploring new technologies
              or contributing to open source.
            </p>

            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
```

- [ ] **Commit**

```bash
git add src/components/Portfolio/About/index.tsx
git commit -m "feat: add About section component"
```

---

## Task 6: Create Contact section component

**Files:**
- Create: `src/components/Portfolio/Contact/index.tsx`

- [ ] **Create the Contact component with split layout**

```tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section
      id="contact"
      data-animate
      className="bg-card"
    >
      <div className="mx-auto max-w-[1170px] px-4 py-24 sm:px-8 xl:px-0">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

          {/* Left: intro + links */}
          <div>
            <h2 className="mb-4 text-3xl font-extrabold text-foreground sm:text-4xl">
              Get In Touch
            </h2>
            <p className="mb-8 max-w-[420px] leading-relaxed text-muted-foreground">
              I'm open to new opportunities, collaborations, or just a friendly
              chat. Send me a message and I'll get back to you as soon as
              possible.
            </p>

            <a
              href="mailto:your@email.com"
              className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              your@email.com
            </a>

            <div className="flex gap-4">
              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0.674805C5.625 0.674805 0.375 5.8498 0.375 12.2998C0.375 17.3998 3.7125 21.7498 8.3625 23.3248C8.9625 23.4373 9.15 23.0623 9.15 22.7998C9.15 22.5373 9.15 21.7873 9.1125 20.7748C5.8875 21.5248 5.2125 19.1998 5.2125 19.1998C4.6875 17.8873 3.9 17.5123 3.9 17.5123C2.85 16.7623 3.9375 16.7623 3.9375 16.7623C5.1 16.7998 5.7375 17.9623 5.7375 17.9623C6.75 19.7623 8.475 19.2373 9.1125 18.8998C9.225 18.1498 9.525 17.6248 9.8625 17.3248C7.3125 17.0623 4.575 16.0498 4.575 11.6248C4.575 10.3498 5.0625 9.3373 5.775 8.5498C5.6625 8.2873 5.25 7.0873 5.8875 5.4748C5.8875 5.4748 6.9 5.1748 9.1125 6.6748C10.05 6.4123 11.025 6.2623 12.0375 6.2623C13.05 6.2623 14.0625 6.3748 14.9625 6.6748C17.175 5.2123 18.15 5.4748 18.15 5.4748C18.7875 7.0498 18.4125 8.2873 18.2625 8.5498C19.0125 9.3373 19.4625 10.3873 19.4625 11.6248C19.4625 16.0498 16.725 17.0623 14.175 17.3248C14.5875 17.6998 14.9625 18.4498 14.9625 19.4998C14.9625 21.0748 14.925 22.3123 14.925 22.6873C14.925 22.9873 15.15 23.3248 15.7125 23.2123C20.2875 21.6748 23.625 17.3623 23.625 12.2248C23.5875 5.8498 18.375 0.674805 12 0.674805Z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.258 5.635 5.906-5.635zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: contact form */}
          <Card>
            <CardContent className="p-6">
              <form className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="What's on your mind?"
                    className="min-h-[140px]"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default Contact;
```

- [ ] **Commit**

```bash
git add src/components/Portfolio/Contact/index.tsx
git commit -m "feat: add Contact section component"
```

---

## Task 7: Update home page

**Files:**
- Modify: `src/app/(site)/page.tsx`

- [ ] **Replace all SaaS sections with the four portfolio sections**

```tsx
import About from "@/components/Portfolio/About";
import Contact from "@/components/Portfolio/Contact";
import Projects from "@/components/Portfolio/Projects";
import Hero from "@/components/Home/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Name — Full Stack Developer",
  description: "Personal portfolio of Your Name, a full stack web developer.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
```

- [ ] **Commit**

```bash
git add src/app/(site)/page.tsx
git commit -m "feat: rebuild home page as portfolio"
```

---

## Task 8: Update footer

**Files:**
- Modify: `src/components/Footer/index.tsx`
- Delete: `src/components/Footer/FooterLinkList.tsx`
- Delete: `src/components/Footer/linksData.ts`

- [ ] **Replace footer with simplified portfolio nav**

```tsx
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logo/logo.svg";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-background py-12">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <Separator className="mb-10" />

        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          {/* Logo + copyright */}
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <Link href="/">
              <Image src={logo} alt="Logo" width={120} height={28} />
            </Link>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>

          {/* Anchor nav */}
          <nav className="flex items-center gap-6">
            <Link
              href="#about"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </Link>
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a href="#" aria-label="GitHub" className="text-muted-foreground transition-colors hover:text-primary">
              <svg className="fill-current" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0.674805C5.625 0.674805 0.375 5.8498 0.375 12.2998C0.375 17.3998 3.7125 21.7498 8.3625 23.3248C8.9625 23.4373 9.15 23.0623 9.15 22.7998C9.15 22.5373 9.15 21.7873 9.1125 20.7748C5.8875 21.5248 5.2125 19.1998 5.2125 19.1998C4.6875 17.8873 3.9 17.5123 3.9 17.5123C2.85 16.7623 3.9375 16.7623 3.9375 16.7623C5.1 16.7998 5.7375 17.9623 5.7375 17.9623C6.75 19.7623 8.475 19.2373 9.1125 18.8998C9.225 18.1498 9.525 17.6248 9.8625 17.3248C7.3125 17.0623 4.575 16.0498 4.575 11.6248C4.575 10.3498 5.0625 9.3373 5.775 8.5498C5.6625 8.2873 5.25 7.0873 5.8875 5.4748C5.8875 5.4748 6.9 5.1748 9.1125 6.6748C10.05 6.4123 11.025 6.2623 12.0375 6.2623C13.05 6.2623 14.0625 6.3748 14.9625 6.6748C17.175 5.2123 18.15 5.4748 18.15 5.4748C18.7875 7.0498 18.4125 8.2873 18.2625 8.5498C19.0125 9.3373 19.4625 10.3873 19.4625 11.6248C19.4625 16.0498 16.725 17.0623 14.175 17.3248C14.5875 17.6998 14.9625 18.4498 14.9625 19.4998C14.9625 21.0748 14.925 22.3123 14.925 22.6873C14.925 22.9873 15.15 23.3248 15.7125 23.2123C20.2875 21.6748 23.625 17.3623 23.625 12.2248C23.5875 5.8498 18.375 0.674805 12 0.674805Z" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-muted-foreground transition-colors hover:text-primary">
              <svg className="fill-current" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="text-muted-foreground transition-colors hover:text-primary">
              <svg className="fill-current" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.258 5.635 5.906-5.635zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

- [ ] **Delete the now-unused footer files**

```bash
rm src/components/Footer/FooterLinkList.tsx
rm src/components/Footer/linksData.ts
```

- [ ] **Commit**

```bash
git add src/components/Footer/index.tsx
git rm src/components/Footer/FooterLinkList.tsx src/components/Footer/linksData.ts
git commit -m "feat: simplify footer to portfolio nav"
```
