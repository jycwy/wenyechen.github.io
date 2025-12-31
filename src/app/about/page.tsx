import { Metadata } from "next";
import { Button } from "@/components";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about my background as an AI Engineer specializing in LLM systems, evaluation, and production ML infrastructure.",
};

export default function AboutPage() {
  return (
    <div className="gradient-bg">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <div className="mx-auto max-w-3xl">
          {/* Main Content */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8 bg-accent"></div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Background
              </p>
            </div>
            <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              About Me
            </h1>
            <div className="mt-6 h-px w-20 bg-gradient-to-r from-accent to-accent-secondary"></div>
            <p className="mt-8 text-xl leading-relaxed text-foreground-muted">
              {siteConfig.about.intro}
            </p>

            <div className="mt-10 space-y-6">
              {siteConfig.about.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg leading-relaxed text-foreground-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12">
              <Button href="/contact">Get in Touch</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

