import About from "@/components/Portfolio/About";
import Contact from "@/components/Portfolio/Contact";
import Projects from "@/components/Portfolio/Projects";
import AnimatedShaderHero from "@/components/ui/animated-shader-hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Robert Bicknell — Full Stack Developer",
  description: "Personal portfolio of Robert Bicknell, a full stack web developer.",
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
