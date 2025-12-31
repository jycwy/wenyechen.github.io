import { Expertise } from "@/content/site";

interface ExpertiseCardProps {
  expertise: Expertise;
}

export function ExpertiseCard({ expertise }: ExpertiseCardProps) {
  return (
    <div className="card-hover border-accent-decoration group rounded-2xl border border-border bg-background p-8 transition-all">
      <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-accent">
        {expertise.title}
      </h3>
      <p className="mt-4 leading-relaxed text-foreground-muted">
        {expertise.description}
      </p>
    </div>
  );
}

