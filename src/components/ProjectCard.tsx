import { Project } from "@/content/site";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="card-hover border-accent-decoration group rounded-2xl border border-border bg-background p-8">
      <h3 className="font-serif text-2xl font-semibold text-foreground group-hover:text-accent">{project.title}</h3>

      <div className="mt-6 space-y-5">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            Problem
          </span>
          <p className="mt-2 leading-relaxed text-foreground-muted">
            {project.problem}
          </p>
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            Solution
          </span>
          <p className="mt-2 leading-relaxed text-foreground-muted">
            {project.solution}
          </p>
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-secondary">
            Impact
          </span>
          <p className="mt-2 leading-relaxed text-foreground-muted">
            {project.impact}
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-foreground-muted transition-colors hover:border-accent hover:text-accent"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

