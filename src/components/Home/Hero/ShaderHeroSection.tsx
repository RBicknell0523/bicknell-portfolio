"use client";
import AnimatedShaderHero from "@/components/ui/animated-shader-hero";

const scroll = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function ShaderHeroSection() {
  return (
    <AnimatedShaderHero
      trustBadge={{ text: "Available for hire", icons: ["✨"] }}
      headline={{ line1: "Hi, I'm", line2: "Robert Bicknell" }}
      subtitle="Full Stack Developer — I build fast, accessible, and beautiful web applications using React, Next.js, and Node.js."
      buttons={{
        primary:   { text: "View Projects", onClick: () => scroll("projects") },
        secondary: { text: "Contact Me",    onClick: () => scroll("contact") },
      }}
    />
  );
}
