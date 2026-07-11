"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteConfig } from "@/content/site-config";
import { resolveImage } from "@/lib/image-fallback";
import assetManifest from "@/content/asset-manifest.json";
import MagneticButton from "@/components/motion/MagneticButton";
import ScrollHint from "@/components/motion/ScrollHint";

/**
 * T4 hero — still image + scroll parallax, HO1 centered overlay.
 * Prompt-only asset mode: the hero still is resolved from the platform's
 * asset-manifest ("section-hero" slot); until that's populated, resolveImage
 * returns a brand gradient so the hero is never blank.
 */
export default function HeroParallax() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.9]);

  const heroImg = resolveImage({
    src: (assetManifest as any).images?.["section-hero"],
    industry: "ecommerce",
    keyword: "minimal luxury product still life dark",
    brandColor: siteConfig.brand.primary,
    fallbackTier: "gradient",
  });

  return (
    <section
      ref={ref}
      id="top"
      className="relative h-[100svh] w-full overflow-hidden"
    >
      <motion.div
        aria-hidden
        style={{ y, scale }}
        className="absolute inset-0 h-full w-full"
      >
        <img
          src={heroImg}
          alt=""
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* HO1 — centered overlay: darken toward edges + bottom for legibility */}
      <motion.div
        aria-hidden
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-bg/50 via-bg/40 to-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(19,22,46,0.55)_100%)]" />
      </motion.div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-[11px] uppercase tracking-[0.35em] text-primary"
        >
          {siteConfig.mixedMedia.accentEyebrow}
        </motion.span>

        <h1 className="mt-6 font-display font-light leading-[0.95] text-white text-[clamp(44px,9vw,120px)]">
          {siteConfig.hero.h1.map((line, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.15 + i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`block ${
                line.accent ? "italic text-primary" : "text-white"
              }`}
            >
              {line.text}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-white/70"
        >
          {siteConfig.company.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <MagneticButton
            as="a"
            href="#offer"
            className="rounded-full bg-primary px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-bg transition-opacity hover:opacity-90"
          >
            {siteConfig.cta.primary}
          </MagneticButton>
          <Link
            href="#contact"
            className="rounded-full border border-white/25 px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-white transition-colors hover:border-primary hover:text-primary"
          >
            {siteConfig.cta.secondary}
          </Link>
        </motion.div>
      </div>

      <ScrollHint label="Scroll to explore" accentColor="#dbc03d" />
    </section>
  );
}
