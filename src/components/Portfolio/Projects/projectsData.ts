export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
  featured: boolean;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Warriors Blood Coffee",
    description:
      "A React-powered coffee brand website built with Vite. A collaborative project showcasing component-driven UI, fast HMR development workflow, and modern JavaScript practices.",
    tags: ["React", "JavaScript", "Vite", "CSS"],
    liveUrl: "#",
    repoUrl: "https://github.com/joshuasilvazero-source/warriors-blood-coffee-silva",
    featured: true,
  },
  {
    title: "The Beans Place",
    description:
      "A coffee shop website built with Vite and vanilla JavaScript. Features a modern layout, responsive design, and polished CSS styling to showcase a fictional café brand.",
    tags: ["JavaScript", "CSS", "HTML", "Vite"],
    liveUrl: "#",
    repoUrl: "https://github.com/RBicknell0523/Coffee-Website-Bicknell",
    featured: false,
  },
  {
    title: "Barber Shop Website",
    description:
      "A fully responsive barber shop landing page built with vanilla HTML, CSS, and JavaScript. Even split between layout, styling, and interactivity — designed to give a small business a professional web presence.",
    tags: ["JavaScript", "CSS", "HTML"],
    liveUrl: "#",
    repoUrl: "https://github.com/RBicknell0523/Salon-Site-Bicknell",
    featured: false,
  },
  {
    title: "Salon Site",
    description:
      "A second iteration salon website with a heavier focus on JavaScript interactivity. Demonstrates growth in dynamic UI patterns and scripted behavior on top of a clean HTML/CSS foundation.",
    tags: ["JavaScript", "CSS", "HTML"],
    liveUrl: "#",
    repoUrl: "https://github.com/RBicknell0523/Salon-Site2-Bicknell",
    featured: false,
  },
];
