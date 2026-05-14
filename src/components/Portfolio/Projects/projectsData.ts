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
