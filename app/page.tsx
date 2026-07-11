import Link from "next/link";
import { Check, ArrowUpRight, Mail } from "lucide-react";

import { siteConfig } from "@/content/site-config";
import { resolveImage } from "@/lib/image-fallback";
import assetManifest from "@/content/asset-manifest.json";
import { SEOHead } from "@/components/seo/SEOHead";
import {
  organizationSchema,
  websiteSchema,
  serviceSchema,
} from "@/lib/seo/structured-data";
import { SocialLinks } from "@/components/social-icons";
import HeroParallax from "@/components/HeroParallax";
import FadeUp, { StaggerChildren } from "@/components/motion/FadeUp";
import TextReveal from "@/components/motion/TextReveal";
import NumberCounter from "@/components/motion/NumberCounter";
import GlassCursorHighlight from "@/components/motion/GlassCursorHighlight";
import ContactForm from "@/components/ContactForm";
import { getKodagenLiveData, formatKodagenPrice } from "@/lib/kodagen-live";

const brand = {
  name: siteConfig.company.name,
  tagline: siteConfig.company.tagline,
  description: siteConfig.company.description,
  email: siteConfig.company.email,
  phone: siteConfig.company.phone,
  location: siteConfig.company.location,
  logo: siteConfig.seo.defaultOgImage,
  url: siteConfig.seo.siteUrl,
  socials: Object.fromEntries(
    Object.entries(siteConfig.socials).filter(([, v]) => v),
  ) as Record<string, string>,
};

const service = siteConfig.services[0];

const stats = [
  { to: 1, suffix: "", label: "Curated collection" },
  { to: 40, suffix: "+", label: "Countries shipped to" },
  { to: 72, suffix: "h", label: "Typical dispatch" },
  { to: 100, suffix: "%", label: "Secure checkout" },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
      {children}
    </span>
  );
}

export default async function HomePage() {
  const live = await getKodagenLiveData();

  const offerImg = resolveImage({
    src: (assetManifest as any).images?.["service-online-storefront"],
    industry: "ecommerce",
    keyword: "premium ecommerce packaging detail",
    brandColor: siteConfig.brand.primary,
    fallbackTier: "gradient",
  });

  return (
    <>
      <SEOHead
        path="/"
        jsonLd={[
          organizationSchema(brand),
          websiteSchema({ brand }),
          serviceSchema({ service, provider: brand, areaServed: "Worldwide" }),
        ]}
      />

      <main>
        <HeroParallax />

        {/* Trust bar */}
        <div className="border-y border-white/10 bg-surface/30">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-5 md:px-8">
            {siteConfig.trustBar.map((item) => (
              <span
                key={item}
                className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/50"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* About */}
        <section id="about" className="section-pad">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <FadeUp>
              <Eyebrow>About</Eyebrow>
            </FadeUp>
            <TextReveal
              as="h2"
              className="mt-5 max-w-3xl font-display text-[clamp(30px,5vw,60px)] font-light leading-tight text-white"
            >
              {siteConfig.aboutHeading}
            </TextReveal>

            <div className="mt-10 grid gap-12 md:grid-cols-2">
              <FadeUp>
                <p className="text-lg leading-relaxed text-white/70">
                  {siteConfig.aboutStory}
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="font-display text-2xl md:text-3xl font-light italic leading-snug text-secondary">
                  &ldquo;{siteConfig.manifesto}&rdquo;
                </p>
              </FadeUp>
            </div>

            <StaggerChildren className="mt-16 grid gap-6 md:grid-cols-3">
              {siteConfig.values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl border border-white/10 bg-surface/40 p-8"
                >
                  <h3 className="font-display text-xl text-white">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {v.description}
                  </p>
                </div>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* Offer / storefront */}
        <section id="offer" className="section-pad bg-surface/20">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <FadeUp>
              <Eyebrow>{siteConfig.servicesHeading}</Eyebrow>
            </FadeUp>

            {live.products.length > 0 ? (
              <StaggerChildren className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {live.products.map((p) => {
                  const priceText = formatKodagenPrice(p.price_kobo, p.currency);
                  const href = p.payment_link || "#contact";
                  const external = !!p.payment_link;
                  const img = p.image_url || offerImg;
                  return (
                    <div
                      key={p.id}
                      className="flex flex-col overflow-hidden rounded-3xl border border-white/12 bg-surface/30"
                      style={{
                        boxShadow:
                          "inset 0 1px 0 rgba(255,255,255,0.12), 0 30px 80px -30px rgba(0,0,0,0.6)",
                      }}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={img}
                          alt={p.title}
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-bg/70 to-transparent" />
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="font-display text-2xl font-light text-white">
                          {p.title}
                        </h3>
                        {p.description && (
                          <p className="mt-3 text-sm leading-relaxed text-white/70">
                            {p.description}
                          </p>
                        )}
                        {priceText && (
                          <div className="mt-4 font-mono text-sm text-primary">
                            {priceText}
                          </div>
                        )}
                        <div className="mt-6 flex-1" />
                        {external ? (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 self-start rounded-full bg-primary px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-bg transition-opacity hover:opacity-90"
                          >
                            Buy now
                            <ArrowUpRight size={14} />
                          </a>
                        ) : (
                          <Link
                            href={href}
                            className="inline-flex items-center gap-2 self-start rounded-full bg-primary px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-bg transition-opacity hover:opacity-90"
                          >
                            Enquire
                            <ArrowUpRight size={14} />
                          </Link>
                        )}
                      </div>
                    </div>
                  );
                })}
              </StaggerChildren>
            ) : (
              <div className="mt-10 grid items-center gap-12 lg:grid-cols-2">
                <FadeUp>
                  <div
                    className="relative overflow-hidden rounded-3xl border border-white/12"
                    style={{
                      boxShadow:
                        "inset 0 1px 0 rgba(255,255,255,0.12), 0 30px 80px -30px rgba(0,0,0,0.6)",
                    }}
                  >
                    <GlassCursorHighlight
                      accent="var(--color-primary, #dbc03d)"
                      opacity={0.24}
                      radius={340}
                    >
                      <div className="relative aspect-[4/3]">
                        <img
                          src={offerImg}
                          alt={service.name}
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-bg to-transparent" />
                      </div>
                    </GlassCursorHighlight>
                  </div>
                </FadeUp>

                <div>
                  <FadeUp>
                    <h3 className="font-display text-[clamp(28px,4vw,48px)] font-light leading-tight text-white">
                      {service.name}
                    </h3>
                  </FadeUp>
                  <FadeUp delay={0.08}>
                    <p className="mt-5 text-lg leading-relaxed text-white/70">
                      {service.description}
                    </p>
                  </FadeUp>
                  <StaggerChildren className="mt-8 grid gap-3 sm:grid-cols-2">
                    {(service.highlights ?? []).map((h) => (
                      <div key={h} className="flex items-start gap-3">
                        <Check
                          size={18}
                          className="mt-0.5 flex-shrink-0 text-primary"
                        />
                        <span className="text-sm text-white/80">{h}</span>
                      </div>
                    ))}
                  </StaggerChildren>
                  <FadeUp delay={0.15}>
                    <Link
                      href="#contact"
                      className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-bg transition-opacity hover:opacity-90"
                    >
                      {siteConfig.cta.primary}
                      <ArrowUpRight size={16} />
                    </Link>
                  </FadeUp>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Why sdsd + stats */}
        <section id="why" className="section-pad">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <FadeUp>
              <Eyebrow>Why sdsd</Eyebrow>
            </FadeUp>
            <TextReveal
              as="h2"
              className="mt-5 max-w-3xl font-display text-[clamp(30px,5vw,60px)] font-light leading-tight text-white"
            >
              {siteConfig.whyUs.heading}
            </TextReveal>

            <StaggerChildren className="mt-14 grid gap-10 md:grid-cols-3">
              {siteConfig.whyUs.items.map((item, i) => (
                <div key={item.title}>
                  <div className="font-mono text-sm text-primary/70">
                    0{i + 1}
                  </div>
                  <h3 className="mt-4 font-display text-2xl text-white">
                    {item.title}
                  </h3>
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

        {/* Contact / CTA */}
        <section id="contact" className="section-pad bg-surface/20">
          <div className="mx-auto max-w-4xl px-6 text-center md:px-8">
            <FadeUp>
              <Eyebrow>Get in touch</Eyebrow>
            </FadeUp>
            <TextReveal
              as="h2"
              className="mx-auto mt-5 max-w-2xl font-display text-[clamp(32px,6vw,72px)] font-light leading-tight text-white"
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
              <div className="mt-10 flex flex-col items-center gap-6">
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
    </>
  );
}
