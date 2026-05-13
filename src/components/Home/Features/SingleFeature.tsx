import { Feature } from "@/types/feature";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  return (
    <div className="w-full p-3 sm:w-1/2 lg:w-1/3">
      <Card className="h-full text-center transition-shadow hover:shadow-md">
        <CardContent className="px-8 py-10">
          <span className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent">
            <Image src={feature.icon} alt="icon" width={32} height={32} />
          </span>
          <h3 className="mb-3 text-lg font-semibold text-foreground">
            {feature.title}
          </h3>
          <p className="text-muted-foreground">{feature.description}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SingleFeature;
