import { Metadata } from "next";
import { ProjectCard } from "@/components";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Featured AI and ML projects showcasing problem-solving, technical implementation, and business impact.",
};

export default function ProjectsPage() {
  return (
    <div className="gradient-bg">
      <div className="mx-auto max-w-5xl px-6 py-20">
        {/* Header */}
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Projects
          </h1>
          <p className="mt-4 text-lg text-foreground-muted">
            A selection of projects highlighting my approach to AI engineering:
            understanding the problem, building the right solution, and measuring
            real impact.
          </p>
        </div>

        {/* Project Grid */}
        <div className="mt-12 grid gap-8">
          {siteConfig.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

