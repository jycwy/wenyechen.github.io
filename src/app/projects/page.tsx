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
      <div className="mx-auto max-w-5xl px-6 py-24">
        {/* Header */}
        <div className="max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-8 bg-accent"></div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Portfolio
            </p>
          </div>
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Projects
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-foreground-muted">
            A selection of projects highlighting my approach to AI engineering:
            understanding the problem, building the right solution, and measuring
            real impact.
          </p>
        </div>

        {/* Project Grid */}
        <div className="mt-16 grid gap-8">
          {siteConfig.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

