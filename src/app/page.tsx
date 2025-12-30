import { Button, ExpertiseCard } from "@/components";
import { siteConfig } from "@/content/site";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-wider text-accent">
              {siteConfig.hero.greeting}
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {siteConfig.name}
            </h1>
            <p className="mt-2 text-xl font-medium text-foreground-muted md:text-2xl">
              {siteConfig.title}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-foreground-muted">
              {siteConfig.hero.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={siteConfig.hero.cta.primary.href}>
                {siteConfig.hero.cta.primary.label}
              </Button>
              <Button href={siteConfig.hero.cta.secondary.href} variant="secondary">
                {siteConfig.hero.cta.secondary.label}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="border-t border-border-subtle">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              What I Do
            </h2>
            <p className="mt-2 text-foreground-muted">
              Specializing in production AI systems that deliver measurable impact
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {siteConfig.expertise.map((item) => (
              <ExpertiseCard key={item.title} expertise={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="border-t border-border-subtle bg-background-secondary">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Featured Work
              </h2>
              <p className="mt-2 text-foreground-muted">
                Selected projects showcasing problem-solving and impact
              </p>
            </div>
            <Button href="/projects" variant="secondary">
              View All
            </Button>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {siteConfig.projects.slice(0, 2).map((project) => (
              <article
                key={project.id}
                className="rounded-xl border border-border bg-background p-6"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-foreground-muted line-clamp-2">
                  {project.problem}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-accent-subtle px-3 py-1 text-xs font-medium text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border-subtle">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Let&apos;s Build Something Great
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-foreground-muted">
            {siteConfig.contact.availability}
          </p>
          <div className="mt-8">
            <Button href="/contact">Get in Touch</Button>
          </div>
        </div>
      </section>
    </>
  );
}
