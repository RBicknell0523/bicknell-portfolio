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
