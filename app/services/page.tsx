import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, Check } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { resolveImage } from "@/lib/image-fallback";
import assetManifest from "@/content/asset-manifest.json";
import FadeUp, { StaggerChildren } from "@/components/motion/FadeUp";
import TextReveal from "@/components/motion/TextReveal";
import {
  getKodagenLiveData,
  formatKodagenPrice,
} from "@/lib/kodagen-live";

export const metadata: Metadata = {
  title: siteConfig.servicesHeading,
  description: siteConfig.company.description,
};

export default async function ServicesPage() {
  const live = await getKodagenLiveData();
  const service = siteConfig.services[0];
  const offerImg = resolveImage({
    src: (assetManifest as any).images?.["service-online-storefront"],
    industry: "ecommerce",
    keyword: "premium ecommerce packaging detail",
    brandColor: siteConfig.brand.primary,
    fallbackTier: "gradient",
  });

  return (
    <main>
      <section className="section-pad pt-40 md:pt-48">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <FadeUp>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
              {siteConfig.servicesHeading}
            </span>
          </FadeUp>
          <TextReveal
            as="h1"
            className="mt-5 max-w-3xl font-display text-[clamp(40px,7vw,84px)] font-light leading-tight text-white"
          >
            The collection
          </TextReveal>

          {live.products.length > 0 ? (
            <StaggerChildren className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {live.products.map((p) => {
                const priceText = formatKodagenPrice(p.price_kobo, p.currency);
                const external = !!p.payment_link;
                const href = p.payment_link || "/contact";
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
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h2 className="font-display text-2xl font-light text-white">
                        {p.title}
                      </h2>
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
            <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
              <FadeUp>
                <div
                  className="relative overflow-hidden rounded-3xl border border-white/12"
                  style={{
                    boxShadow:
                      "inset 0 1px 0 rgba(255,255,255,0.12), 0 30px 80px -30px rgba(0,0,0,0.6)",
                  }}
                >
                  <div className="relative aspect-[4/3]">
                    <img
                      src={offerImg}
                      alt={service.name}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                </div>
              </FadeUp>
              <div>
                <FadeUp>
                  <h2 className="font-display text-[clamp(28px,4vw,48px)] font-light leading-tight text-white">
                    {service.name}
                  </h2>
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
                    href="/contact"
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
    </main>
  );
}
