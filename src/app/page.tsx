import { Button, ExpertiseCard } from "@/components";
import { siteConfig } from "@/content/site";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 py-32 md:py-40">
          <div className="max-w-3xl">
            <p className="animate-fade-in-up stagger-1 text-xs font-medium uppercase tracking-[0.2em] text-accent-secondary">
              {siteConfig.hero.greeting}
            </p>
            <h1 className="animate-fade-in-up stagger-2 mt-3 font-serif text-5xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl">
              {siteConfig.name}
            </h1>
            <p className="animate-fade-in-up stagger-3 mt-4 font-serif text-2xl italic leading-relaxed text-foreground-muted md:text-3xl">
              {siteConfig.title}
            </p>
            <div className="animate-fade-in-up stagger-4 mt-6 h-px w-16 bg-gradient-to-r from-accent to-accent-secondary"></div>
            <p className="animate-fade-in-up stagger-5 mt-8 text-lg leading-relaxed text-foreground-muted">
              {siteConfig.hero.description}
            </p>
            <div className="animate-fade-in-up stagger-6 mt-10 flex flex-wrap gap-4">
              <Button href={siteConfig.hero.cta.primary.href}>
                {siteConfig.hero.cta.primary.label}
              </Button>
              <Button href={siteConfig.hero.cta.secondary.href} variant="secondary">
                {siteConfig.hero.cta.secondary.label}
              </Button>
            </div>
          </div>
        </div>
        {/* Decorative organic shape */}
        <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-accent-subtle to-accent-secondary-subtle opacity-30 blur-3xl"></div>
      </section>

      {/* Expertise Section */}
      <section className="border-t border-border-subtle bg-background-secondary">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-8 bg-accent"></div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Expertise
            </p>
          </div>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            What I Do
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-foreground-muted">
            Specializing in production AI systems that deliver measurable impact
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {siteConfig.expertise.map((item) => (
              <ExpertiseCard key={item.title} expertise={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="border-t border-border-subtle">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px w-8 bg-accent"></div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                  Portfolio
                </p>
              </div>
              <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Featured Work
              </h2>
              <p className="mt-3 text-lg text-foreground-muted">
                Selected projects showcasing problem-solving and impact
              </p>
            </div>
            <Button href="/projects" variant="secondary">
              View All Projects
            </Button>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {siteConfig.projects.slice(0, 2).map((project) => (
              <article
                key={project.id}
                className="card-hover border-accent-decoration group rounded-2xl border border-border bg-background p-8 transition-shadow"
              >
                <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground-muted line-clamp-2">
                  {project.problem}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground-muted"
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
      <section className="border-t border-border-subtle bg-background-secondary">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <div className="mx-auto h-px w-16 bg-gradient-to-r from-accent to-accent-secondary"></div>
          <h2 className="mx-auto mt-8 max-w-2xl font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
            Let&apos;s Build Something Great
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-foreground-muted">
            {siteConfig.contact.availability}
          </p>
          <div className="mt-10">
            <Button href="/contact">Get in Touch</Button>
          </div>
        </div>
      </section>
    </>
  );
}
