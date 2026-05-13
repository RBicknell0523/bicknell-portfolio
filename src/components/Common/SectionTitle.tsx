import { Badge } from "@/components/ui/badge";

type propsType = {
  subTitle?: string;
  title: string;
  paragraph: string;
  center?: boolean;
};

const SectionTitle = ({ subTitle, title, paragraph }: propsType) => {
  return (
    <div className="mb-16 text-center">
      {subTitle && (
        <Badge variant="secondary" className="mb-4 text-primary">
          {subTitle}
        </Badge>
      )}
      <h2 className="mb-4 text-xl font-extrabold leading-tight text-foreground sm:text-3xl xl:text-heading-2">
        {title}
      </h2>
      <p className="mx-auto max-w-[714px] text-muted-foreground">{paragraph}</p>
    </div>
  );
};

export default SectionTitle;
