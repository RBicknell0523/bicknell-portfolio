import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "./projectsData";

const Projects = () => {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      data-animate
      className="mx-auto max-w-[1170px] px-4 py-24 sm:px-8 xl:px-0"
    >
      <h2 className="mb-3 text-3xl font-extrabold text-foreground sm:text-4xl">
        Projects
      </h2>
      <p className="mb-12 max-w-[480px] text-muted-foreground">
        A selection of things I&apos;ve built. Each one taught me something new.
      </p>

      {/* Featured project */}
      {featured && (
        <Card data-animate className="mb-8 overflow-hidden">
          <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
            <div className="flex flex-col justify-between p-8">
              <div>
                <CardHeader className="p-0 pb-4">
                  <CardTitle className="text-2xl">{featured.title}</CardTitle>
                  <CardDescription className="mt-2 text-base leading-relaxed">
                    {featured.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="flex flex-wrap gap-2">
                    {featured.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </div>
              <CardFooter className="mt-6 gap-3 p-0">
                <Button asChild>
                  <Link href={featured.liveUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href={featured.repoUrl} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </Link>
                </Button>
              </CardFooter>
            </div>
            {/* Image / animation slot */}
            <div className="flex items-center justify-center bg-muted p-8 lg:p-0">
              <div className="aspect-video w-full rounded-md bg-card" />
            </div>
          </div>
        </Card>
      )}

      {/* Grid projects */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {rest.map((project, index) => (
          <Card key={index} data-animate className="flex flex-col overflow-hidden">
            {/* Image / animation slot */}
            <div className="aspect-video w-full bg-muted" />
            <div className="flex flex-1 flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </CardContent>
              <CardFooter className="mt-auto gap-3">
                <Button size="sm" asChild>
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </Link>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </Link>
                </Button>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
