import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-background pt-32 md:pt-40 xl:pt-48"
    >
      <div className="mx-auto max-w-[900px] px-4 sm:px-8 xl:px-0">
        <div className="text-center">
          <Badge variant="secondary" className="mb-5 text-primary">
            Launch Your AI Startup with
          </Badge>

          <h1 className="mb-6 text-3xl font-extrabold leading-tight text-foreground sm:text-5xl xl:text-heading-1">
            OpenAI + Next.js SaaS Boilerplate and Starter Kit
          </h1>

          <p className="mx-auto mb-9 max-w-[500px] text-base text-muted-foreground md:text-lg">
            Ideal for developers looking to build SaaS applications using OpenAI
            and Next.js, this starter kit comes with pre-configured and
            pre-built examples, making it easier to quickly kickstart your AI
            startup.
          </p>

          <Button asChild size="lg">
            <Link href="/ai-examples">Try AI Examples</Link>
          </Button>
        </div>
      </div>

      <div className="relative mx-auto mt-14 w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="aspect-[1170/411] w-full">
          <Image
            className="h-full w-full object-contain"
            src="./images/hero/hero.svg"
            alt="hero"
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
