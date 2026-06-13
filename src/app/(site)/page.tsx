import dynamic from "next/dynamic";
import AnimatedShaderHero from "@/components/ui/animated-shader-hero";
import { Metadata } from "next";

const About    = dynamic(() => import("@/components/Portfolio/About"),    { loading: () => <div className="min-h-[800px]" /> });
const Projects = dynamic(() => import("@/components/Portfolio/Projects"), { loading: () => <div className="min-h-[600px]" /> });
const Contact  = dynamic(() => import("@/components/Portfolio/Contact"),  { loading: () => <div className="min-h-[600px]" /> });

export const metadata: Metadata = {
  metadataBase: new URL("https://robert-bicknell.com"),
  title: "Robert Bicknell — Full Stack Developer",
  description: "Personal portfolio of Robert Bicknell, a certified full stack web developer and U.S. Army veteran building reliable, accessible, and scalable web applications.",
  openGraph: {
    title: "Robert Bicknell — Full Stack Developer",
    description: "Certified full stack developer and U.S. Army veteran. React, Next.js, Node.js, TypeScript.",
    url: "/",
    siteName: "Robert Bicknell",
    images: [{ url: "/images/about/avatar.png", alt: "Robert Bicknell — Full Stack Developer" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Robert Bicknell — Full Stack Developer",
    description: "Certified full stack developer and U.S. Army veteran. React, Next.js, Node.js, TypeScript.",
    images: ["/images/about/avatar.png"],
  },
};

export default function Home() {
  return (
    <>
      <AnimatedShaderHero
        greeting="Hi, I'm"
        headline={{
          line1: "Robert Bicknell",
          line2Texts: ["Full Stack Developer", "Army Veteran", "Problem Solver", "Leader"],
          line2: "Full Stack Developer",
        }}
        subtitle="Building reliable, accessible, and scalable web applications — mission-focused from day one."
        buttons={{
          primary: { text: "View My Work", href: "#projects" },
          secondary: { text: "Get In Touch", href: "#contact" },
        }}
      />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
