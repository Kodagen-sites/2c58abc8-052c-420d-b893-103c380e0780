import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import FadeUp from "@/components/motion/FadeUp";
import TextReveal from "@/components/motion/TextReveal";
import { SocialLinks } from "@/components/social-icons";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: siteConfig.ctaBlock.description,
};

export default function ContactPage() {
  return (
    <main>
      <section className="section-pad pt-40 md:pt-48">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
          <FadeUp>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
              Get in touch
            </span>
          </FadeUp>
          <TextReveal
            as="h1"
            className="mx-auto mt-5 max-w-2xl font-display text-[clamp(40px,7vw,84px)] font-light leading-tight text-white"
          >
            {siteConfig.ctaBlock.heading}
          </TextReveal>
          <FadeUp delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              {siteConfig.ctaBlock.description}
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <a
              href={`mailto:${siteConfig.company.email}`}
              className="mt-10 inline-flex items-center gap-3 font-display text-2xl md:text-3xl font-light text-white transition-colors hover:text-primary"
            >
              <Mail size={22} className="text-primary" />
              {siteConfig.company.email}
            </a>
          </FadeUp>

          <FadeUp delay={0.25}>
            <div className="mx-auto max-w-xl">
              <ContactForm />
            </div>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="mt-12 flex flex-col items-center gap-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">
                {siteConfig.company.location}
              </p>
              <SocialLinks
                socials={siteConfig.socials}
                className="gap-5 text-white/80"
                iconClassName="h-5 w-5"
              />
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
