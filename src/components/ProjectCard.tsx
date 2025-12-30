import { Project } from "@/content/site";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="card-hover rounded-xl border border-border bg-background-secondary p-6">
      <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>

      <div className="mt-4 space-y-4">
        <div>
          <span className="text-xs font-medium uppercase tracking-wider text-accent">
            Problem
          </span>
          <p className="mt-1 text-sm leading-relaxed text-foreground-muted">
            {project.problem}
          </p>
        </div>

        <div>
          <span className="text-xs font-medium uppercase tracking-wider text-accent">
            Solution
          </span>
          <p className="mt-1 text-sm leading-relaxed text-foreground-muted">
            {project.solution}
          </p>
        </div>

        <div>
          <span className="text-xs font-medium uppercase tracking-wider text-accent">
            Impact
          </span>
          <p className="mt-1 text-sm leading-relaxed text-foreground-muted">
            {project.impact}
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-accent-subtle px-3 py-1 text-xs font-medium text-accent"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

