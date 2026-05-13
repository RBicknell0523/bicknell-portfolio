import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-accent px-6 py-16 text-center sm:px-10 lg:py-24">
          <Badge className="mb-4 bg-primary text-primary-foreground">
            Try our tool for Free
          </Badge>
          <h2 className="mb-4 text-2xl font-extrabold text-foreground sm:text-4xl xl:text-heading-2">
            What are you waiting for?
          </h2>
          <p className="mx-auto mb-9 max-w-[714px] text-muted-foreground">
            Build SaaS AI applications using OpenAI and Next.js, this kit
            comes with pre-configured and pre-built examples, making it easier
            to quickly kickstart your AI startup.
          </p>

          <Button asChild size="lg">
            <Link href="/">Get Started for Free</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
