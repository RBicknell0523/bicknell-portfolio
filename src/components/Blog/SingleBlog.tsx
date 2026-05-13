import { imageBuilder } from "@/sanity/sanity-utils";
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, User } from "lucide-react";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, mainImage, slug, metadata, author, tags, publishedAt } = blog;

  return (
    <Card className="group overflow-hidden transition-shadow hover:shadow-md">
      <div className="relative h-[222px] w-full overflow-hidden">
        <Image
          src={imageBuilder(mainImage).url()}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 ease-linear group-hover:scale-105"
        />
      </div>

      <CardContent className="p-5">
        <div className="mb-3 flex flex-wrap gap-2">
          {tags?.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <h3 className="mb-2">
          <Link
            href={`/blog/${slug.current}`}
            className="line-clamp-2 text-lg font-semibold text-foreground transition-colors hover:text-primary"
          >
            {title}
          </Link>
        </h3>

        <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">
          {metadata}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <User className="h-4 w-4" />
            <Link
              href={`/blog/author/${author?.slug?.current}`}
              className="hover:text-primary"
            >
              {author?.name}
            </Link>
          </div>
          <div className="flex items-center gap-1.5">
            <CalendarDays className="h-4 w-4" />
            <span>
              {publishedAt &&
                new Date(publishedAt).toDateString().split(" ").slice(1).join(" ")}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SingleBlog;
