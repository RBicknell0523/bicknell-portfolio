import About from "@/components/Portfolio/About";
import Contact from "@/components/Portfolio/Contact";
import Projects from "@/components/Portfolio/Projects";
import ShaderHeroSection from "@/components/Home/Hero/ShaderHeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Robert Bicknell — Full Stack Developer",
  description: "Personal portfolio of Robert Bicknell, a full stack web developer.",
};

export default function Home() {
  return (
    <>
      <ShaderHeroSection />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
