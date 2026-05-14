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
