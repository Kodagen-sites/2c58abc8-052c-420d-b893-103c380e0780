import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";
import FadeUp, { StaggerChildren } from "@/components/motion/FadeUp";
import TextReveal from "@/components/motion/TextReveal";

export const metadata: Metadata = {
  title: "About",
  description: siteConfig.aboutStory,
};

export default function AboutPage() {
  return (
    <main>
      <section className="section-pad pt-40 md:pt-48">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <FadeUp>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
              About
            </span>
          </FadeUp>
          <TextReveal
            as="h1"
            className="mt-5 font-display text-[clamp(40px,7vw,84px)] font-light leading-tight text-white"
          >
            {siteConfig.aboutHeading}
          </TextReveal>

          <FadeUp delay={0.1}>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-white/70">
              {siteConfig.aboutStory}
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="mt-10 max-w-2xl font-display text-2xl md:text-3xl font-light italic leading-snug text-secondary">
              &ldquo;{siteConfig.manifesto}&rdquo;
            </p>
          </FadeUp>

          <StaggerChildren className="mt-20 grid gap-6 md:grid-cols-3">
            {siteConfig.values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-white/10 bg-surface/40 p-8"
              >
                <h2 className="font-display text-xl text-white">{v.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {v.description}
                </p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </main>
  );
}
