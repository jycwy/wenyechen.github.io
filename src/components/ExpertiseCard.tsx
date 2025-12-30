import { Expertise } from "@/content/site";

interface ExpertiseCardProps {
  expertise: Expertise;
}

export function ExpertiseCard({ expertise }: ExpertiseCardProps) {
  return (
    <div className="rounded-xl border border-border bg-background-secondary p-6 transition-colors hover:border-border">
      <h3 className="text-lg font-semibold text-foreground">
        {expertise.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
        {expertise.description}
      </p>
    </div>
  );
}

