import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";
import FadeUp, { StaggerChildren } from "@/components/motion/FadeUp";
import TextReveal from "@/components/motion/TextReveal";
import NumberCounter from "@/components/motion/NumberCounter";

export const metadata: Metadata = {
  title: siteConfig.whyUs.heading,
  description: siteConfig.company.description,
};

const stats = [
  { to: 1, suffix: "", label: "Curated collection" },
  { to: 40, suffix: "+", label: "Countries shipped to" },
  { to: 72, suffix: "h", label: "Typical dispatch" },
  { to: 100, suffix: "%", label: "Secure checkout" },
];

export default function WorkPage() {
  return (
    <main>
      <section className="section-pad pt-40 md:pt-48">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <FadeUp>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
              Why sdsd
            </span>
          </FadeUp>
          <TextReveal
            as="h1"
            className="mt-5 max-w-3xl font-display text-[clamp(40px,7vw,84px)] font-light leading-tight text-white"
          >
            {siteConfig.whyUs.heading}
          </TextReveal>

          <StaggerChildren className="mt-16 grid gap-10 md:grid-cols-3">
            {siteConfig.whyUs.items.map((item, i) => (
              <div key={item.title}>
                <div className="font-mono text-sm text-primary/70">
                  0{i + 1}
                </div>
                <h2 className="mt-4 font-display text-2xl text-white">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {item.description}
                </p>
              </div>
            ))}
          </StaggerChildren>

          <div className="mt-20 grid grid-cols-2 gap-8 border-t border-white/10 pt-12 md:grid-cols-4">
            {stats.map((s) => (
              <FadeUp key={s.label}>
                <div className="font-display text-[clamp(36px,6vw,68px)] font-light text-white">
                  <NumberCounter to={s.to} suffix={s.suffix} />
                </div>
                <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
                  {s.label}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
