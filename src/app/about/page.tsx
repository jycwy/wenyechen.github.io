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
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="mx-auto max-w-3xl">
          {/* Main Content */}
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              About Me
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground-muted">
              {siteConfig.about.intro}
            </p>

            <div className="mt-8 space-y-4">
              {siteConfig.about.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="leading-relaxed text-foreground-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10">
              <Button href="/contact">Get in Touch</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

