import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const FeaturesList = () => {
  return (
    <section className="pt-12">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="grid gap-6 sm:grid-cols-12">
          {/* Wide feature card */}
          <div className="sm:col-span-12">
            <Card className="overflow-hidden">
              <CardContent className="flex flex-col items-center justify-between gap-8 p-6 sm:flex-row sm:p-10 xl:p-14">
                <div className="w-full sm:max-w-[477px]">
                  <Badge variant="secondary" className="mb-4 text-primary">
                    Kickstart your AI Startup
                  </Badge>
                  <h3 className="mb-4 text-xl font-bold text-foreground sm:text-2xl lg:text-3xl">
                    Seamless OpenAI Integration
                  </h3>
                  <p className="mb-8 text-muted-foreground">
                    Build SaaS AI applications using OpenAI and Next.js, this
                    kit comes with pre-configured and pre-built examples, making
                    it easier to quickly kickstart your AI startup.
                  </p>
                  <Button asChild variant="outline">
                    <Link href="/#">Learn more</Link>
                  </Button>
                </div>

                <div className="relative hidden aspect-square w-full max-w-[320px] sm:block lg:max-w-[380px]">
                  <Image
                    src="/images/features/big-icon.svg"
                    alt="icon"
                    fill
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tall feature card */}
          <div className="sm:col-span-7">
            <Card className="h-full">
              <CardContent className="flex h-full flex-col justify-center p-6 sm:p-10">
                <span className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-accent sm:mb-10 sm:h-16 sm:w-16">
                  <Image
                    src="/images/features/icon-05.svg"
                    alt="icon"
                    width={28}
                    height={28}
                  />
                </span>
                <h3 className="mb-3 text-lg font-semibold text-foreground sm:text-xl">
                  All Essential SaaS Pages
                </h3>
                <p className="text-sm text-muted-foreground sm:text-base">
                  Build SaaS AI applications using OpenAI and Next.js, this kit
                  comes with pre-configured and pre-built examples, making it
                  easier to quickly kickstart.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Narrow feature card */}
          <div className="sm:col-span-5">
            <Card className="h-full">
              <CardContent className="flex h-full flex-col justify-center p-6 sm:p-10">
                <span className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-accent sm:mb-10 sm:h-16 sm:w-16">
                  <Image
                    src="/images/features/icon-07.svg"
                    alt="icon"
                    width={28}
                    height={28}
                  />
                </span>
                <h3 className="mb-3 text-lg font-semibold text-foreground sm:text-xl">
                  Highly Customizable
                </h3>
                <p className="text-sm text-muted-foreground sm:text-base">
                  Build SaaS AI applications using OpenAI and Next.js, quickly
                  kickstart your AI startup.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesList;
